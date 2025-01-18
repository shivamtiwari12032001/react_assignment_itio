import React from 'react';

const TransactionsTable = ({ transactions }) => {
  return (
   <>
    <div style={{backgroundColor:'#6a6ab1',color:'#fff',fontWeight:'bold', padding:'0.8em 0.2em'}} >Recent Transactions</div>
    <table className="transactions-table">
      <thead style={{backgroundColor:'#8884d8',color:'#fff'}}>
        <tr>
          <th>Date</th>
          <th>Trx</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Details</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn, index) => (
          <tr key={index}>
            <td>{txn.date}</td>
            <td>{txn.trx}</td>
            <td>{txn.type}</td>
            <td>{txn.amount}</td>
            <td>{txn.details}</td>
            <td className={`status ${txn.status.toLowerCase()}`}>{txn.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </>
  );
};

export default TransactionsTable;
