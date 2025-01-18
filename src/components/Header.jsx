import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h2>Dashboard</h2>
      <select>
        <option value="7-days">7 days</option>
        <option value="30-days">30 days</option>
        <option value="1-year">1 year</option>
      </select>
    </div>
  );
};

export default Header;
