import React, { useState } from 'react';
import '../Style/PersonalDetails.css';

const PersonalDetails: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "OrgName": "Tech Solutions Pvt. Ltd.",
    "StartDate": "2010-07-01",
    "EndDate": "2022-12-31"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Employment History</h2>
      <div className="form-item">
        <label>Orginazation Name:</label>
        <input 
          type="text" 
          name="OrgName" 
          value={data.OrgName} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Start Date:</label>
        <input 
          type="text" 
          name="StartDate" 
          value={data.StartDate} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>End Date:</label>
        <input 
          type="text" 
          name="EndDate" 
          value={data.EndDate} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
