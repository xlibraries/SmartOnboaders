import React, { useState } from 'react';
import '../Style/NationalityDetails.css';

const NationalityDetails: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "PersonalDetailsID": "11234567876543",
    "Nationality": "Indian",
    "PAN": "ABCDE1234F",
    "WorkAuthorization": "Valid work visa"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="nationality-details">
      <h2 className='label'>Nationality Details</h2>
      <div className="form-item">
        <label>Aadhar Number:</label>
        <input
          type="text"
          name="Aadhar Number"
          value={data.PersonalDetailsID}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-item">
        <label>Nationality:</label>
        <input
          type="text"
          name="Nationality"
          value={data.Nationality}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-item">
        <label>PAN Number:</label>
        <input
          type="text"
          name="PAN Number"
          value={data.PAN}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-item">
        <label>Work Authorization:</label>
        <input
          type="text"
          name="Work Authorization"
          value={data.WorkAuthorization}
          onChange={handleChange}
          className="input-field"
        />
      </div>
    </div>
  );
};

export default NationalityDetails;
