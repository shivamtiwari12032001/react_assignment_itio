import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const CircularChart = ({ data, title }) => {
  const style = {
    top: 0,
    left: 0,
    lineHeight: '24px',
  };

  return (
    <div className="chart-container">
      <h4>{title}</h4>
      <RadialBarChart
        width={150}
        height={150}
        innerRadius="20%"
        outerRadius="90%"
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="value"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
};

export default CircularChart;
