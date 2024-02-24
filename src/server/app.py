import json

from flask import Flask, request, jsonify

from s3_utils  import upload_file_to_s3
from textract_utils import extract_text_using_textract

app = Flask(__name__)


@app.route('/status', methods=['GET'])
def status():
    return jsonify({"status": "OK", "message": "Service is running"}), 200


@app.route('/get_genai_extracts', methods=['POST'])
def get_genai_extracts():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    folder_with_uploaded_files = upload_file_to_s3(file=file)
    extracted_text_dictionary = extract_text_using_textract(folder_name=folder_with_uploaded_files)
    json_file = 'extracted_data.json'
    # write the dictionary to a JSON file
    with open(json_file, 'w') as f:
        json.dump(extracted_text_dictionary, f)
    return "Process Completed"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
