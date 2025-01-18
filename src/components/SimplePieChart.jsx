import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';



const cx = 100; 
const cy = 150; 
const iR = 50; 
const oR = 100; 

export default class Example extends PureComponent {
  render() {
    const { data,text,Icon} = this.props
    return (
      <PieChart width={220} height={220}>
        <Pie
          dataKey="value"
          startAngle={210}
          endAngle={-30}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <foreignObject x={cx - 10} y={cy - 40} width={50} height={50}>
          <Icon size={24} color="#4caf50" />
        </foreignObject>
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '10px', fontWeight: 'bold', fill: '#333' }}
        >
          {text}
        </text>
      </PieChart>
    );
  }
}
