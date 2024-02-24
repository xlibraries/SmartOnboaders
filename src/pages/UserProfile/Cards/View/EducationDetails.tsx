import React, { useState } from 'react';
import '../Style/EducationDetails.css';

const EducationDetails: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "EducationQualification": "Master's in Computer Science",
    "YearOfPassing": 2010,
    "PercentageOrCGPA": 3.7,
    "University": "Delhi University",
    "Country": "India",
    "State": "Delhi"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Education Details</h2>
      <div className="form-item">
        <label>EducationQualification:</label>
        <input 
          type="text" 
          name="EducationQualification" 
          value={data.EducationQualification} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Year Of Passing:</label>
        <input 
          type="text" 
          name="Year Of Passing" 
          value={data.YearOfPassing} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>PercentageOrCGPA:</label>
        <input 
          type="text" 
          name="PercentageOrCGPA" 
          value={data.PercentageOrCGPA} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>University:</label>
        <input 
          type="text" 
          name="University" 
          value={data.University} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Country:</label>
        <input 
          type="text" 
          name="Country" 
          value={data.Country} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>State:</label>
        <input 
          type="text" 
          name="State" 
          value={data.State} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default EducationDetails;
