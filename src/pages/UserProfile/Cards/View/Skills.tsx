import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios for HTTP requests
import '../Style/Skills.css';

const Skills: React.FC = () => {
  const [data, setData] = useState({
    "PrimarySkill": "",
    "SecondarySkill": "",
    "OtherSkills": "",
    "DomainExpertise": ""
  });

  useEffect(() => {
    // Fetch data from JSON file
    axios.get('data.json')
      .then(response => {
        // Assuming the JSON structure is as provided
        const skillsData = response.data.Skills[0]; // Assuming there's only one skill entry
        setData(skillsData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="skills">
      <h2 className='label'>Skills</h2>
      <div className="form-item">
        <label>Primary Skill:</label>
        <input 
          type="text" 
          name="PrimarySkill" 
          value={data.PrimarySkill} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Secondary Skill:</label>
        <input 
          type="text" 
          name="SecondarySkill" 
          value={data.SecondarySkill} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Other Skills:</label>
        <input 
          type="text" 
          name="OtherSkills" 
          value={data.OtherSkills} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
      <div className="form-item">
        <label>Domain Expertise:</label>
        <input 
          type="text" 
          name="DomainExpertise" 
          value={data.DomainExpertise} 
          onChange={handleChange} 
          className="input-field" 
        />
      </div>
    </div>
  );
};

export default Skills;
