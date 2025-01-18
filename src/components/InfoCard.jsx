import React from 'react';

const InfoCard = ({ icon, value, label, bgColor }) => {
  return (
    <div className="info-card" style={{ backgroundColor: bgColor }}>
      <div className="icon">{icon}</div>
      <div className="content">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default InfoCard;
