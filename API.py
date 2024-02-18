import os
import boto3
import uuid
import zipfile
import logging
from io import BytesIO
import base64
import datetime

# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

s3 = boto3.client('s3')

def extract_zip_to_s3(zip_content, bucket_name, folder_name):
    # Create a BytesIO object to read the zip file content
    zip_buffer = BytesIO(zip_content)

    # Extract the zip file contents
    with zipfile.ZipFile(zip_buffer, 'r') as zip_ref:
        for file_info in zip_ref.infolist():
            # Read the file content
            file_content = zip_ref.read(file_info.filename)
            
            # Upload the file content to S3
            s3.put_object(Body=file_content, Bucket=bucket_name, Key=f"{folder_name}/{file_info.filename}")
            logger.info(f"Uploaded {file_info.filename} to S3 folder: {folder_name}")

def lambda_handler(event, context):
    try:
        # Get the bucket name from environment variables
        bucket_name = 'uploaded-files-semicolon'
        
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M")
        
        # Generate a random UUID for the folder
        uuid_generate = str(uuid.uuid4().hex)[:8]
        folder_name = f"{timestamp}-{uuid_generate}"

        # Extract the zip file contents and upload them to S3
        zip_content = event['body'].encode('utf-8')
        print('event', zip_content)
        zip_file_base64 = event['body']
        zip_file_bytes = base64.b64decode(zip_file_base64)
        print('zip_file_bytes', zip_file_bytes)
        extract_zip_to_s3(zip_file_bytes, bucket_name, folder_name)

        # Return a success response
        return {
            'statusCode': 200,
            'body': f'Zip file extracted and files uploaded successfully to S3 in folder: {folder_name}'
        }
    except Exception as e:
        # Log the error
        logger.error(f"Error: {str(e)}")
        
        # Return an error response
        return {
            'statusCode': 500,
            'body': 'Internal server error'
        }



