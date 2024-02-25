import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios for HTTP requests
import '../Style/PersonalDetails.css';

const PersonalDetails: React.FC = () => {
  const [personalDetails, setPersonalDetails] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from JSON file
    axios.get('data.json')
      .then(response => {
        // Assuming the JSON structure is as provided
        const fetchedPersonalDetails = response.data.PersonalDetails;
        setPersonalDetails(fetchedPersonalDetails);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedPersonalDetails = [...personalDetails];
    updatedPersonalDetails[index] = {
      ...updatedPersonalDetails[index],
      [field]: event.target.value
    };
    setPersonalDetails(updatedPersonalDetails);
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Personal Details</h2>
      {personalDetails.map((details, index) => (
        <div key={index} className="personal-details-entry">
          <div className="form-item">
            <label>Full Name as per Aadhar Card:</label>
            <input 
              type="text" 
              value={details.FullNameAsPerAadharCard} 
              onChange={(event) => handleChange(event, index, 'FullNameAsPerAadharCard')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Primary Mobile Number:</label>
            <input 
              type="text" 
              value={details.MobNo} 
              onChange={(event) => handleChange(event, index, 'MobNo')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Email ID:</label>
            <input 
              type="text" 
              value={details.EmailID} 
              onChange={(event) => handleChange(event, index, 'EmailID')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Gender:</label>
            <input 
              type="text" 
              value={details.Gender} 
              onChange={(event) => handleChange(event, index, 'Gender')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Date of Birth:</label>
            <input 
              type="text" 
              value={details.DateOfBirth} 
              onChange={(event) => handleChange(event, index, 'DateOfBirth')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Age:</label>
            <input 
              type="text" 
              value={details.Age} 
              onChange={(event) => handleChange(event, index, 'Age')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Marital Status:</label>
            <input 
              type="text" 
              value={details.MaritalStatus} 
              onChange={(event) => handleChange(event, index, 'MaritalStatus')} 
              className="input-field" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalDetails;
