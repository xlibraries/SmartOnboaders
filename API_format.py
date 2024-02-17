import json
import os
import base64
import requests

# Specify the path to your file
file_path = 'Archive.zip'

# Open the file in binary mode, read it, and encode the content
with open(file_path, 'rb') as f:
    file_content = base64.b64encode(f.read()).decode('utf-8')

# Create a dictionary with the file name and content
file_dict = {
    'name': os.path.basename(file_path),
    'content': file_content
}

# Convert the dictionary to a JSON string
file_json = json.dumps([file_dict])

# Define the URL of your Lambda function
url = 'https://l293mx5b2g.execute-api.us-west-2.amazonaws.com/default/post_api'

# Send a POST request to your Lambda function with the JSON string in the body
response = requests.post(url, data=file_json)

# Print the response from your Lambda function
print(response.text)
