import React from 'react';
import './CircularLoader.css';

const CircularLoader = ({current, total}) => {
  const circumference = 2 * Math.PI * 50;
  const progress = (current / total) * circumference;
  const neww = 30;
  return (
    <div className="circular-loader-container">
      <svg viewBox="0 0 110 110">
        <circle cx="55" cy="55" r="50"></circle>
        <circle cx="55" cy="55" r="50" style={{ strokeDasharray: `${progress} ${circumference}`}}></circle>
      </svg>
      <div className="circular-loader-text">
        {current}/{total}
      </div>
    </div>
  );
}

export default CircularLoader;