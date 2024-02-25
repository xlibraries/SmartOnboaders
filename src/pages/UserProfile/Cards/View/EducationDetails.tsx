import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios for HTTP requests
import '../Style/EducationDetails.css';

const EducationDetails: React.FC = () => {
  const [educationData, setEducationData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from JSON file
    axios.get('data.json')
      .then(response => {
        // Assuming the JSON structure is as provided
        const fetchedEducationData = response.data.EducationDetails;
        setEducationData(fetchedEducationData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[index] = {
      ...updatedEducationData[index],
      [field]: event.target.value
    };
    setEducationData(updatedEducationData);
  };

  return (
    <div className="personal-details">
      <h2 className='label'>Education Details</h2>
      {educationData.map((education, index) => (
        <div key={index} className="education-entry">
          <div className="form-item">
            <label>Education Qualification:</label>
            <input 
              type="text" 
              value={education.EducationQualification} 
              onChange={(event) => handleChange(event, index, 'EducationQualification')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Year Of Passing:</label>
            <input 
              type="text" 
              value={education.YearOfPassing} 
              onChange={(event) => handleChange(event, index, 'YearOfPassing')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Percentage Or CGPA:</label>
            <input 
              type="text" 
              value={education.PercentageOrCGPA} 
              onChange={(event) => handleChange(event, index, 'PercentageOrCGPA')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>University:</label>
            <input 
              type="text" 
              value={education.University} 
              onChange={(event) => handleChange(event, index, 'University')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Country:</label>
            <input 
              type="text" 
              value={education.Country} 
              onChange={(event) => handleChange(event, index, 'Country')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>State:</label>
            <input 
              type="text" 
              value={education.State} 
              onChange={(event) => handleChange(event, index, 'State')} 
              className="input-field" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationDetails;
