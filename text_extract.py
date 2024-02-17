import json
import base64
import boto3

def lambda_handler(event, context):
    if not event or 'body' not in event or not event['body']:
        return {
            'statusCode': 400,
            'body': json.dumps('No data provided')
        }

    try:
        # Decode the base64 string
        decoded_body = base64.b64decode(event['body']).decode('utf-8')
        # Parse the decoded string as JSON
        files = json.loads(decoded_body)
    except (json.JSONDecodeError, base64.binascii.Error) as e:
        return {
            'statusCode': 400,
            'body': json.dumps(f'Invalid format: {str(e)}')
        }

    # Create an S3 client
    s3 = boto3.client('s3')

    # Process the files
    for file in files:
        file_name = file['name']
        file_content = base64.b64decode(file['content'])

        # Upload the file content to S3
        try:
            s3.put_object(Bucket='textract01aks', Key=file_name, Body=file_content)
        except Exception as e:
            return {
                'statusCode': 500,
                'body': json.dumps(f'Error uploading file to S3: {str(e)}')
            }

    return {
        'statusCode': 200,
        'body': json.dumps('Files processed successfully')
    }
    
    
    
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
