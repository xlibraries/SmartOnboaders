import React, { useState } from 'react';
import '../Style/AdditionalQualifications.css';

const AdditionalQualifications: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "ID": 1,
    "Title": "Certified Agile Practitioner",
    "Institute": "Project Management Institute",
    "Duration": "5 days",
    "YearOfPassing": 2014,
    "CertificateNumber": "CAP56789"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Additional Qualification</h2>
      <div className="form-item">
        <label>Title:</label>
        <input 
          type="text" 
          name="Title" 
          value={data.Title} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Institute:</label>
        <input 
          type="text" 
          name="Institute" 
          value={data.Institute} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Duration:</label>
        <input 
          type="text" 
          name="Duration" 
          value={data.Duration} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Year Of Passing:</label>
        <input 
          type="integer" 
          name="YearOfPassing" 
          value={data.YearOfPassing} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Certificate Number:</label>
        <input 
          type="text" 
          name="CertificateNumber" 
          value={data.CertificateNumber} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default AdditionalQualifications;
