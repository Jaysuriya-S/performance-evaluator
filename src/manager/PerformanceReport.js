import React from 'react';
import './manager.css';

const PerformanceReport = () => {
  const report = {
    name: 'Alice',
    skill: 'Python',
    score: 85,
    strengths: 'Loops, Functions',
    weaknesses: 'File Handling',
    improvement: 'Practice file-based operations',
  };

  return (
    <div className="page-container">
      <h2>Performance Report</h2>
      <div className="report-card">
        <p><strong>Name:</strong> {report.name}</p>
        <p><strong>Skill:</strong> {report.skill}</p>
        <p><strong>Score:</strong> {report.score}%</p>
        <p><strong>Strengths:</strong> {report.strengths}</p>
        <p><strong>Weaknesses:</strong> {report.weaknesses}</p>
        <p><strong>Suggestions:</strong> {report.improvement}</p>
      </div>
    </div>
  );
};

export default PerformanceReport;
