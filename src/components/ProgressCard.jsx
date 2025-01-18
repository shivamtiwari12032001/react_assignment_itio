import React from 'react';

const ProgressCard = ({ title, value, color, icon }) => {
  return (
    <div className="progress-card">
      <div className="circle" style={{ borderColor: `${color} transparent transparent transparent` }}>
        <div className="icon" style={{ color }}>{icon}</div>
      </div>
      <div className="details">
        <h4 style={{ color }}>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ProgressCard;
