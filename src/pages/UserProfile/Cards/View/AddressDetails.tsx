import React, { useState } from 'react';
import '../Style/AddressDetails.css';

const AddressDetails: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "Country": "India",
    "Address": "456 Nehru Nagar",
    "City": "New Delhi",
    "State": "Delhi",
    "Pincode": "110001",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Additional Details</h2>
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
        <label>Address:</label>
        <input 
          type="text" 
          name="Address" 
          value={data.Address} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>City:</label>
        <input 
          type="text" 
          name="City" 
          value={data.City} 
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
      <div className="form-item">
        <label>Pincode:</label>
        <input 
          type="text" 
          name="Pincode" 
          value={data.Pincode} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default AddressDetails;
