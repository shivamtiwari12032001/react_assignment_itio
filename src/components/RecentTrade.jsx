import React from 'react';

const TransactionsTable = ({ recentTrades }) => {
  return (
   <>
    <div style={{backgroundColor:'#6a6ab1',color:'#fff',fontWeight:'bold', padding:'0.8em 0.2em'}} >Recent Trade</div>
    <table className="transactions-table">
      <thead style={{backgroundColor:'#8884d8',color:'#fff'}}>
        <tr>
          <th>Price</th>
          <th>Quantity</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {recentTrades.map((rTrade, index) => (
          <tr key={index}>
            <td>{rTrade.price}</td>
            <td>{rTrade.quantity}</td>
            <td>{rTrade.time}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
   </>
  );
};

export default TransactionsTable;
