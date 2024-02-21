import os


# Define keywords for each document
unique_doc_keywords = {
    "10th Marksheet": ["SECONDARY SCHOOL CERTIFICATE EXAMINATION"],
    "12th Marksheet": ["CENTRAL BOARD OF SECONDARY EDUCATION"],
    "Aadhar Card": ["Unique Identification Authority of India", "Government of India", "Address"],
    "PAN Card": ["Permanent Account Number", "Income Tax Department", "Government of India"],
    "Resume": ["Resume", "Contact"],
    "Passport": ["Passport", "Government of India"],
    "Salary Slip": ["Basic", "Salary"]
}


# Function to check if keywords are present in a file
def check_document(doc, docs_present):
    for doc_name, doc_keywords in unique_doc_keywords.items():
        if all(keyword in doc for keyword in doc_keywords):
            print(f"{doc_name}: Present")
            docs_present[doc_name] = "Present"

    return docs_present


# Main function to check all documents
def check_all_documents_str(doc_list: list[str]):
    docs_present = {
        "10th Marksheet": "Not Present",
        "12th Marksheet": "Not Present",
        "Aadhar Card": "Not Present",
        "PAN Card": "Not Present",
        "Resume": "Not Present",
        "Passport": "Not Present",
        "Salary Slip": "Not Present"
    }
    for doc in doc_list:
        docs_present = check_document(doc, docs_present)

    return docs_present


def check_all_documents_in_folder(folder_path: str):
    # If docs are present in a folder, provide folder path as input to this func
    file_contents = []
    for filename in os.listdir(folder_path):
        if filename.endswith('.txt'):
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'r') as file:
                content = file.read()
                file_contents.append(content)

    docs_present = check_all_documents_str(doc_list=file_contents)
    return docs_present


# Call the main function to check all documents
# print(check_all_documents(doc_list=["CENTRAL BOARD OF SECONDARY EDUCATION",
# "Unique Identification Authority of India Government of India Address",
