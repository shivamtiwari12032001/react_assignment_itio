import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'BTC', value: 32.5, color: '#8884d8' },
  { name: 'ETH', value: 27.5, color: '#83a6ed' },
  { name: 'DOGE', value: 25.0, color: '#8dd1e1' },
  { name: 'ADA', value: 10.0, color: '#82ca9d' },
  { name: 'BCH', value: 5.0, color: '#ffc658' },
];

const WalletOverview = () => {
  return (
    <div className="wallet-overview">
      <h3>Wallet Overview</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default WalletOverview;
