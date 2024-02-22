import json
import boto3
import logging

# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    logger.info('Received event: %s', json.dumps(event))

    # Create a Textract client
    textract = boto3.client('textract')

    # Create an S3 client
    s3 = boto3.client('s3')

    # Get the source bucket and key from the event
    source_bucket = event['Records'][0]['s3']['bucket']['name']
    source_key = event['Records'][0]['s3']['object']['key']

    logger.info('Processing file: %s/%s', source_bucket, source_key)

    # Get the folder name
    folder_name = source_key.split('/')[0]

    # Request text detection
    response = textract.detect_document_text(
        Document={'S3Object': {'Bucket': source_bucket, 'Name': source_key}}
    )

    logger.info('Textract response: %s', json.dumps(response))

    # Extracted text
    extracted_text = [item["Text"] for item in response["Blocks"] if item["BlockType"] == "LINE"]

    logger.info('Extracted text: %s', extracted_text)

    # Define the destination bucket
    destination_bucket = 'processed-files-semicolon24'

    # Define the destination key
    destination_key = folder_name + '/' + source_key.split('/')[-1] + '-extracted.txt'

    logger.info('Saving extracted text to: %s/%s', destination_bucket, destination_key)

    # Save the extracted text to a file in S3
    s3.put_object(
        Body=' '.join(extracted_text),
        Bucket=destination_bucket,
        Key=destination_key
    )

    logger.info('Extraction completed')

    return {
        'statusCode': 200,
        'body': json.dumps('Extracted Text: ' + ' '.join(extracted_text))
    }


































# import json
# import base64
# import boto3

# def lambda_handler(event, context):
#     if not event or 'body' not in event or not event['body']:
#         return {
#             'statusCode': 400,
#             'body': json.dumps('No data provided')
#         }

#     try:
#         # Decode the base64 string
#         decoded_body = base64.b64decode(event['body']).decode('utf-8')
#         # Parse the decoded string as JSON
#         files = json.loads(decoded_body)
#     except (json.JSONDecodeError, base64.binascii.Error) as e:
#         return {
#             'statusCode': 400,
#             'body': json.dumps(f'Invalid format: {str(e)}')
#         }

#     # Create an S3 client
#     s3 = boto3.client('s3')

#     # Process the files
#     for file in files:
#         file_name = file['name']
#         file_content = base64.b64decode(file['content'])

#         # Upload the file content to S3
#         try:
#             s3.put_object(Bucket='textract01aks', Key=file_name, Body=file_content)
#         except Exception as e:
#             return {
#                 'statusCode': 500,
#                 'body': json.dumps(f'Error uploading file to S3: {str(e)}')
#             }

#     return {
#         'statusCode': 200,
#         'body': json.dumps('Files processed successfully')
#     }
    
    
    
# import json
# import boto3
# from botocore.exceptions import NoCredentialsError

# def lambda_handler(event, context):
#     print('Received event:', event)
#     s3 = boto3.client('s3')
#     bucket_name = 'textract01aks'

#     if not event['body']:
#         return {
#             'statusCode': 400,
#             'body': json.dumps('No files provided')
#         }

#     try:
#         files = event['body']  # Parse the JSON string into a Python object
#     except json.JSONDecodeError:
#         return {
#             'statusCode': 400,
#             'body': json.dumps('Invalid JSON format')
#         }

#     for file in files:
#         file_content = file['content']
#         file_name = file['name']
#         file_path = f'{file_name}/{file_name}'  # This creates a "folder" with the file name

#         try:
#             s3_response = s3.put_object(Body=file_content, Bucket=bucket_name, Key=file_path)
#         except NoCredentialsError:
#             return {
#                 'statusCode': 403,
#                 'body': json.dumps('Credentials not available')
#             }

#     return {
#         'statusCode': 200,
#         'body': json.dumps('Files uploaded successfully')
#     }
