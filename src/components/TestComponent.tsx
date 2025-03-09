import React from 'react';

const TestComponent = () => {
  console.log("TEST COMPONENT IS RENDERING!!!");
  
  return (
    <div 
      style={{ 
        background: 'red', 
        color: 'white', 
        padding: '20px', 
        margin: '20px 0', 
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        border: '5px solid yellow',
        animation: 'pulse 1s infinite'
      }}
    >
      ⚠️ THIS IS A TEST COMPONENT ⚠️
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default TestComponent; 