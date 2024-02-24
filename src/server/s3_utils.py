import logging
import boto3
import zipfile
import os
import datetime
import random


def generate_unique_folder_id():
    # Get current date and time
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y-%m-%d %H:%M:%S")

    # Generate a random 6-digit number
    unique_id = random.randint(100000, 999999)

    # Combine timestamp and unique_id into one string
    unique_string = f'{timestamp}-{unique_id}'

    return unique_string


def upload_file_to_s3(file):
    # Func to unzip and upload files to S3
    s3 = boto3.client('s3',
                      aws_access_key_id="AKIA5FTZDA67WBJXB47R",
                      aws_secret_access_key="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"
                      )
    folder_name = generate_unique_folder_id()

    if file and zipfile.is_zipfile(file):
        with zipfile.ZipFile(file) as myzip:
            for name in myzip.namelist():
                with myzip.open(name) as myfile:
                    s3.upload_fileobj(myfile, 'smart-onboard-docs', f"{folder_name}/{os.path.basename(name)}")
        logging.info("Files uploaded successfully!")
        return folder_name
    else:
        logging.info("Invalid file type. Upload unsuccessful.")
        return 'Invalid file'
