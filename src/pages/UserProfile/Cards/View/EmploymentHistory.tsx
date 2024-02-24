// EmploymentHistory.tsx
import React from 'react';
import '../Style/EmploymentHistory.css';

const EmploymentHistory = () => {
  // Replace this with actual data
  const data = {
    "FirstName": "Rajesh",
    "MiddleName": "Kumar",
    "LastName": "Verma",
    "FullNameAsPerAadharCard": "Rajesh Kumar Verma",
    "TelNo": "011-12345678",
    "MobNo": "9876543210",
    "EmailID": "rajesh.verma@example.com",
    "Gender": "Male",
    "DateOfBirth": "1988-09-10",
    "Age": 35,
    "MaritalStatus": "Married",
    "IsCurrentAddressSameAsPermanent": true
  };

  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <p>Name: {data.FirstName} {data.MiddleName} {data.LastName}</p>
      <p>Full Name As Per Aadhar Card: {data.FullNameAsPerAadharCard}</p>
      <p>Tel No: {data.TelNo}</p>
      <p>Mob No: {data.MobNo}</p>
      <p>Email ID: {data.EmailID}</p>
      <p>Gender: {data.Gender}</p>
      <p>Date Of Birth: {data.DateOfBirth}</p>
      <p>Age: {data.Age}</p>
      <p>Marital Status: {data.MaritalStatus}</p>
      <p>Is Current Address Same As Permanent: {data.IsCurrentAddressSameAsPermanent ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default EmploymentHistory;
