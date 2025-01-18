import React from "react";
import Sidebar from "./components/sidebar";
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import TransactionsTable from './components/TransactionsTable';
import SimpleCard from './components/SimpleCard';
import CryptoTransactionsTable from './components/CryptoTransactionsTable';
import RecentTrade from './components/RecentTrade';
import SimplePieChart from './components/SimplePieChart';
import InfoCard from './components/InfoCard';
import WalletOverview from './components/PieChart';
import "./App.css";
import { FaArrowUp, FaArrowDown,FaDollarSign } from 'react-icons/fa';
import { FaFileInvoice, FaWallet, FaBitcoin, FaTicketAlt } from 'react-icons/fa';

const App = () => {

  const transactions = [
    { date: '2025-01-17', trx: '303053052655', type: 'Add Money', amount: '$10', details: 'Add Money Through Stripe', status: 'Success' },
    { date: '2025-01-14', trx: '735523923754', type: 'Add Money', amount: '$10000', details: 'Add Money Through Stripe', status: 'Success' },
    { date: '2025-01-13', trx: '65101887342', type: 'Exchange', amount: '$20', details: 'Convert USD to GBP', status: 'Success' },
    { date: '2025-01-13', trx: '833468466658', type: 'Exchange', amount: '$20', details: 'Convert USD to GBP', status: 'Success' },
    { date: '2025-01-13', trx: '508312926685', type: 'Add Money', amount: '$10000', details: 'Add Money Through Stripe', status: 'Success' },
  ];

  const recentTrades = [
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },
    { price: '102069.00', quantity: '0.00600', time: '02:52:33 PM' },

  ];
  const cryptoTransactions = [
    { date: '2025-01-17', trx: 'DOGE', type: 'Bank Transfer', amount: '26.755', details: 'Buy', status: 'Pending' },

  ];

  const creditedData = [
    { name: 'A', value: 80, color: '#90EE90' },
    { name: 'B', value: 20, color: '#D3D3D3' },
    
  ];

  const debitedData = [
     { name: 'B', value: 45, color: '#D8BFD8' },
    { name: 'B', value: 20, color: '#D3D3D3' },
  ];

  const revenueData = [
    { name: 'C', value: 25, color: '#FFA500' },
   { name: 'B', value: 20, color: '#D3D3D3' },

 ];


  const chartDataCredit = [{ name: 'Credit', value: 80, fill: '#00c853' }];
  const chartDataDebit = [{ name: 'Debit', value: 10, fill: '#d50000' }];
  const chartDataRevenue = [{ name: 'Revenue', value: 35, fill: '#651fff' }];
  return (
    <div className="app">
      <Sidebar />
      <div className="dashboard">
      <Header />
      <div className="full-content">
      <div className="left-section">
        <div className="summary">
          <SummaryCard icon="👤" value="252" label="Total Account" color="#4caf50" />
          <SummaryCard icon="⏳" value="8" label="Total Wallet" color="#2196f3" />
        </div>
      
        <div className="simple-cards-container">
          <SimpleCard Icon={FaFileInvoice} text="Invoice" color="#FF0000"/>
          <SimpleCard Icon={FaWallet} text="Wallet" color="#00FF00"/>
          <SimpleCard Icon={FaBitcoin} text="Bitcoin" color="#0000FF"/>
          <SimpleCard Icon={FaTicketAlt} text="Ticket" color="#FFA500"/>

        </div>
        <div className="content">
          <WalletOverview />
        </div>
        <div className="content">
          <RecentTrade recentTrades={recentTrades} />
        </div>
   

      </div>
      <div className="right-section">
        <div className="info-section">
          <InfoCard icon="👤" value="243" label="Total Users" bgColor="#4caf50" />
          <InfoCard icon="🏛️" value="7" label="New Users" bgColor="#00acc1" />
          <InfoCard icon="💳" value="236" label="Pending Users" bgColor="#1e88e5" />
        </div>
        <div className="progress-section">
        <SimplePieChart data={creditedData} text="Credit $200" Icon={FaArrowUp} />
        <SimplePieChart data={debitedData} text="Debit $20" Icon={FaArrowDown} />
        <SimplePieChart data={revenueData} text="Revenue $40" Icon={FaDollarSign} />
      </div>
        <div className="content">
          <TransactionsTable transactions={transactions} />
          <CryptoTransactionsTable transactions={cryptoTransactions} />
        </div>

      </div>

      </div>

   
   
  
   
    </div>
    </div>
  );
};

export default App;
