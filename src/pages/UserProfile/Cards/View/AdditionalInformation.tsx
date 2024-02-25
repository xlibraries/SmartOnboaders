import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios for HTTP requests
import '../Style/AdditionalInformation.css';

const AdditionalInformation: React.FC = () => {
  const [additionalInformation, setAdditionalInformation] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from JSON file
    axios.get('data.json')
      .then(response => {
        // Assuming the JSON structure is as provided
        const fetchedAdditionalInformation = response.data.AdditionalInformation;
        setAdditionalInformation(fetchedAdditionalInformation);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedAdditionalInformation = [...additionalInformation];
    updatedAdditionalInformation[index] = {
      ...updatedAdditionalInformation[index],
      [field]: event.target.value
    };
    setAdditionalInformation(updatedAdditionalInformation);
  };

  return (
    <div className="additional-information">
      <h2 className='label'>Additional Information</h2>
      {additionalInformation.map((info, index) => (
        <div key={index} className="additional-info-entry">
          <div className="form-item">
            <label>Career Achievements:</label>
            <input 
              type="text" 
              value={info.CareerAchievements} 
              onChange={(event) => handleChange(event, index, 'CareerAchievements')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Comments:</label>
            <input 
              type="text" 
              value={info.Comments} 
              onChange={(event) => handleChange(event, index, 'Comments')} 
              className="input-field" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalInformation;
