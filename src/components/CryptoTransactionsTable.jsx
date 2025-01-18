import React from 'react';

const CryptoTransactionsTable = ({ transactions }) => {
  return (
   <>
      <div style={{backgroundColor:'#6a6ab1',color:'#fff',fontWeight:'bold', padding:'0.8em 0.2em'}} >Crypto Transactions</div>
    <table className="transactions-table">
      <thead style={{backgroundColor:'#8884d8',color:'#fff'}}>
        <tr>
          <th>Date</th>
          <th>Coin</th>
          <th>Payment Type</th>
          <th>No Of Coins</th>
          <th>Amount</th>
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

export default CryptoTransactionsTable;
