import React, { useState } from 'react';
import '../Style/AdditionalInformation.css';

const AdditionalInformation: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "ID": 1,
    "CareerAchievements": "Led successful ERP implementation",
    "Comments": "Strong problem-solving skills"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Additional Informations</h2>
      <div className="form-item">
        <label>CareerAchievements:</label>
        <input 
          type="text" 
          name="CareerAchievements" 
          value={data.CareerAchievements} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Comments:</label>
        <input 
          type="text" 
          name="Comments" 
          value={data.Comments} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default AdditionalInformation;
