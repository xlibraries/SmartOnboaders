import React, { useState } from 'react';
import '../Style/Skills.css';

const Skills: React.FC = () => {
  // Sample data
  const [data, setData] = useState({
    "PrimarySkill": "Java",
    "SecondarySkill": "SQL",
    "OtherSkills": "Spring Framework, Hibernate",
    "DomainExpertise": "IT Services"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.checked });
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
