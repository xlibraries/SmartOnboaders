import React, { useState } from 'react';
import '../Style/ProfessionalReferences.css';

const ProfessionalReferences: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "Name": "Sunita Sharma",
    "PhoneNumber": "999-9876543",
    "EmailID": "sunita.sharma@persistent.com"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Professional Reference</h2>
      <div className="form-item">
        <label>Name:</label>
        <input 
          type="text" 
          name="Name" 
          value={data.Name} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>PhoneNumber:</label>
        <input 
          type="text" 
          name="PhoneNumber" 
          value={data.PhoneNumber} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>EmailID:</label>
        <input 
          type="text" 
          name="EmailID" 
          value={data.EmailID} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default ProfessionalReferences;
