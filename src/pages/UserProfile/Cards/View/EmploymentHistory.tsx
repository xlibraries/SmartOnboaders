import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios for HTTP requests
import '../Style/EmploymentHistory.css';

const EmploymentHistory: React.FC = () => {
  const [employmentHistory, setEmploymentHistory] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from JSON file
    axios.get('data.json')
      .then(response => {
        // Assuming the JSON structure is as provided
        const fetchedEmploymentHistory = response.data.EmploymentHistory;
        setEmploymentHistory(fetchedEmploymentHistory);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: string) => {
    const updatedEmploymentHistory = [...employmentHistory];
    updatedEmploymentHistory[index] = {
      ...updatedEmploymentHistory[index],
      [field]: event.target.value
    };
    setEmploymentHistory(updatedEmploymentHistory);
  };

  return (
    <div className="employment-history">
      <h2 className='label'>Employment History</h2>
      {employmentHistory.map((employment, index) => (
        <div key={index} className="employment-entry">
          <div className="form-item">
            <label>Organization Name:</label>
            <input 
              type="text" 
              value={employment.OrgName} 
              onChange={(event) => handleChange(event, index, 'OrgName')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>Start Date:</label>
            <input 
              type="text" 
              value={employment.StartDate} 
              onChange={(event) => handleChange(event, index, 'StartDate')} 
              className="input-field" 
            />
          </div>
          <div className="form-item">
            <label>End Date:</label>
            <input 
              type="text" 
              value={employment.EndDate} 
              onChange={(event) => handleChange(event, index, 'EndDate')} 
              className="input-field" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmploymentHistory;
