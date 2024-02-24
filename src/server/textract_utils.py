import json
import boto3
import logging
import os
# Configure logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)


def find_key_name(doc_name):
    key_list = {"Aadhar Card": "aadhaar",
                "pan": "pan",
                "10th marksheet": "ssc",
                "12th marksheet": "hsc",
                "passport": "passport",
                "payslip": "payslip",
                "passing certificate": "graduation",
                "resume": "resume"
                }
    for k in key_list.keys():
        if k.lower() in doc_name.lower():
            return key_list[k]

    return "unknown"


def extract_text_using_textract(folder_name):
    # Create a Textract client
    textract = boto3.client('textract',
                            aws_access_key_id="AKIA5FTZDA67WBJXB47R",
                            aws_secret_access_key="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",
                            region_name="ap-south-1"
                            )

    # Create an S3 resource
    s3 = boto3.resource('s3',
                        aws_access_key_id="AKIA5FTZDA67WBJXB47R",
                        aws_secret_access_key="4/DC98mkFrX/4TD20hdmek9TQMLtIKbzo73VtdB+"
                        )

    # Specify your bucket name
    bucket_name = 'smart-onboard-docs'

    # Initialize a dictionary to hold the results
    results = {}

    # Get the list of all files in the specified S3 bucket folder
    bucket = s3.Bucket(bucket_name)
    for obj in bucket.objects.filter(Prefix=folder_name):
        file_name = obj.key
        print(f"Processing file through textract --- {file_name}")
        if os.path.basename(file_name) == "Tanishq Jena Aadhaar Card.pdf":
            continue
        # Request text detection
        response = textract.detect_document_text(
            Document={'S3Object': {'Bucket': bucket_name, 'Name': file_name}}
        )

        # Extracted text
        extracted_text = ' '.join([item["Text"] for item in response["Blocks"] if item["BlockType"] == "LINE"])

        # Add the file name and extracted text to the results dictionary
        key_file_name = find_key_name(doc_name=file_name)
        results[key_file_name] = extracted_text
        print(f"Processed file {file_name} with key {key_file_name} - RESULT - {extracted_text}")

    return results


    # def lambda_handler(event, context):
#     logger.info('Received event: %s', json.dumps(event))
#
#     # Create a Textract client
#     textract = boto3.client('textract')
#
#     # Create an S3 client
#     s3 = boto3.client('s3')
#
#     # Get the source bucket and key from the event
#     source_bucket = event['Records'][0]['s3']['bucket']['name']
#     source_key = event['Records'][0]['s3']['object']['key']
#
#     logger.info('Processing file: %s/%s', source_bucket, source_key)
#
#     # Get the folder name
#     folder_name = source_key.split('/')[0]
#
#     # Request text detection
#     response = textract.detect_document_text(
#         Document={'S3Object': {'Bucket': source_bucket, 'Name': source_key}}
#     )
#
#     logger.info('Textract response: %s', json.dumps(response))
#
#     # Extracted text
#     extracted_text = [item["Text"] for item in response["Blocks"] if item["BlockType"] == "LINE"]
#
#     logger.info('Extracted text: %s', extracted_text)
#
#     # Define the destination bucket
#     destination_bucket = 'processed-files-semicolon24'
#
#     # Define the destination key
#     destination_key = folder_name + '/' + source_key.split('/')[-1] + '-extracted.txt'
#
#     logger.info('Saving extracted text to: %s/%s', destination_bucket, destination_key)


    # return {
    #     'statusCode': 200,
    #     'body': json.dumps('Extracted Text: ' + ' '.join(extracted_text))
    # }
