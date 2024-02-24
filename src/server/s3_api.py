from flask import Flask, request, jsonify
import boto3
import zipfile
import os
import datetime
import random

app = Flask(__name__)
s3 = boto3.client('s3',
                  aws_access_key_id="AKIA5FTZDA67WBJXB47R",
                  aws_secret_access_key="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"
                  )


def generate_unique_folder_id():
    # Get current date and time
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y-%m-%d %H:%M:%S")

    # Generate a random 6-digit number
    unique_id = random.randint(100000, 999999)

    # Combine timestamp and unique_id into one string
    unique_string = f'{timestamp} {unique_id}'

    return unique_string


@app.route('/status', methods=['GET'])
def status():
    return jsonify({"status": "OK", "message": "Service is running"}), 200


@app.route('/upload', methods=['POST'])
def upload_file():
    folder_name = generate_unique_folder_id()
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    if file and zipfile.is_zipfile(file):
        with zipfile.ZipFile(file) as myzip:
            for name in myzip.namelist():
                with myzip.open(name) as myfile:
                    s3.upload_fileobj(myfile, 'smart-onboard-docs', f"{folder_name}/{os.path.basename(name)}")
        return 'File uploaded successfully'
    else:
        return 'Invalid file'


if __name__ == '__main__':
    app.run(debug=True)
