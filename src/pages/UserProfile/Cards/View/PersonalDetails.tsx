import React, { useState } from 'react';
import '../Style/PersonalDetails.css';

const PersonalDetails: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "FirstName": "Rajesh",
    "MiddleName": "Kumar",
    "LastName": "Verma",
    "FullNameAsPerAadharCard": "Rajesh Kumar Verma",
    "MobNo": "9876543210",
    "EmailID": "rajesh.verma@example.com",
    "Gender": "Male",
    "DateOfBirth": "1988-09-10",
    "Age": 35,
    "MaritalStatus": "Married",
    "IsCurrentAddressSameAsPermanent": true
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Personal Details</h2>
      <div className="form-item">
        <label>Full Name as per Aadhar Card:</label>
        <input 
          type="text" 
          name="FullNameAsPerAadharCard" 
          value={data.FullNameAsPerAadharCard} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Primary Mobile Number:</label>
        <input 
          type="text" 
          name="MobNo" 
          value={data.MobNo} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Email ID:</label>
        <input 
          type="text" 
          name="EmailID" 
          value={data.EmailID} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Gender:</label>
        <input 
          type="text" 
          name="Gender" 
          value={data.Gender} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Date of Birth:</label>
        <input 
          type="text" 
          name="DateOfBirth" 
          value={data.DateOfBirth} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Age:</label>
        <input 
          type="text" 
          name="Age" 
          value={data.Age} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Marital Status:</label>
        <input 
          type="text" 
          name="MaritalStatus" 
          value={data.MaritalStatus} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
