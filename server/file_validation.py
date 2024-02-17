# Define keywords for each document
unique_doc_keywords = {
    "10th Marksheet": ["SECONDARY SCHOOL CERTIFICATE EXAMINATION"],
    "12th Marksheet": ["CENTRAL BOARD OF SECONDARY EDUCATION"],
    "Aadhar Card": ["Unique Identification Authority of India", "Government of India", "Address"],
    "PAN Card": ["Permanent Account Number", "Income Tax Department", "Government of India"],
    "Resume": ["Resume", "Contact"],
    "Passport": ["Passport", "Government of India"],
    "Salary Slip": ["Salary Slip", "Payslip"]
}


# Function to check if keywords are present in a file
def check_document(doc, docs_present):
    for doc_name, doc_keywords in unique_doc_keywords.items():
        if all(keyword in doc for keyword in doc_keywords):
            print(f"{doc_name}: Present")
            docs_present[doc_name] = "Present"

    return docs_present


# Main function to check all documents
def check_all_documents(doc_list: list[str]):
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

# Call the main function to check all documents
# print(check_all_documents(doc_list=["CENTRAL BOARD OF SECONDARY EDUCATION",
# "Unique Identification Authority of India Government of India Address",
