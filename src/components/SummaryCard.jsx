import React from 'react';

const SummaryCard = ({ icon, value, label, color }) => {
  return (
    <div className="summary-card">
      <div className="icon">{icon}</div>
      <div>
        <h4>{value}</h4>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
