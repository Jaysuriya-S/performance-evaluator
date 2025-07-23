import React, { useState } from 'react';
import './manager.css';

const CreateTest = () => {
  const [skill, setSkill] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateTest = () => {
    // API call can be added later
    setMessage(`Test created for ${skill}`);
  };

  return (
    <div className="page-container">
      <h2>Create Test</h2>
      <input
        type="text"
        placeholder="Enter skill (e.g., Python)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="input-field"
      />
      <button onClick={handleCreateTest}>Generate Test</button>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default CreateTest;
