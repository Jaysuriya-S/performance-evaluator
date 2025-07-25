import React, { useEffect, useState } from 'react';

const GeneratedQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = localStorage.getItem('generatedQuestions');
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Generated Questions</h2>
      {questions.length === 0 ? (
        <p>No questions found. Please submit your skills first.</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} style={{ marginBottom: '12px' }}>
            <strong>Skill:</strong> {q.skill} <br />
            <strong>Level:</strong> {q.level} <br />
            <strong>Question:</strong> {q.question}
          </div>
        ))
      )}
    </div>
  );
};

export default GeneratedQuestions;
