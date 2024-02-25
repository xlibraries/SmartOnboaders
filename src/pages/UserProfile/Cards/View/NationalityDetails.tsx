import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios for HTTP requests
import '../Style/NationalityDetails.css';

const NationalityDetails: React.FC = () => {
  const [nationalityDetails, setNationalityDetails] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from JSON file
    axios.get('data.json')
      .then(response => {
        // Assuming the JSON structure is as provided
        const fetchedNationalityDetails = response.data.NationalityDetails;
        setNationalityDetails(fetchedNationalityDetails);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedNationalityDetails = [...nationalityDetails];
    updatedNationalityDetails[index] = {
      ...updatedNationalityDetails[index],
      [field]: event.target.value
    };
    setNationalityDetails(updatedNationalityDetails);
  };

  return (
    <div className="nationality-details">
      <h2 className='label'>Nationality Details</h2>
      {nationalityDetails.map((nationality, index) => (
        <div key={index} className="nationality-entry">
          <div className="form-item">
            <label>Aadhar Number:</label>
            <input 
              type="text" 
              value={nationality.PersonalDetailsID} 
              onChange={(event) => handleChange(event, index, 'PersonalDetailsID')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Nationality:</label>
            <input 
              type="text" 
              value={nationality.Nationality} 
              onChange={(event) => handleChange(event, index, 'Nationality')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>PAN Number:</label>
            <input 
              type="text" 
              value={nationality.PAN} 
              onChange={(event) => handleChange(event, index, 'PAN')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Work Authorization:</label>
            <input 
              type="text" 
              value={nationality.WorkAuthorization} 
              onChange={(event) => handleChange(event, index, 'WorkAuthorization')} 
              className="input-field" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NationalityDetails;
