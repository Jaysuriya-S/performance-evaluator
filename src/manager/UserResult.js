import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';  // 👈 Switched from Bar to Pie
import 'chart.js/auto';
import './UserResult.css';

const UserResult = () => {
  const dummyResult = {
    Python: 8,
    Java: 5,
    SQL: 2,
    HTML: 7
  };

  const [score, setScore] = useState(0);
  const [result, setResult] = useState({});

  useEffect(() => {
    const totalScore = Object.values(dummyResult).reduce((a, b) => a + b, 0);
    setScore(totalScore);
    setResult(dummyResult);
  }, []);

  const chartData = {
    labels: Object.keys(result),
    datasets: [
      {
        label: 'Topic-wise Score',
        data: Object.values(result),
        backgroundColor: ['#00796b', '#1de9b6', '#26c6da', '#81d4fa'],
        hoverOffset: 12,
      },
    ],
  };

  return (
    <div className="result-container">
      <h2>Your Test Result</h2>
      <p><strong>Total Score:</strong> {score}</p>

      <div className="chart-box">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default UserResult;
