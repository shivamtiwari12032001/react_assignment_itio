import React from "react";
import { FaUser, FaWallet, FaFileInvoice, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="logo">Admin</h3>
      <ul>
        <li><FaUser /> Dashboard</li>
        <li><FaWallet /> Wallet</li>
        <li><FaFileInvoice /> Invoices</li>
        <li><FaSignOutAlt /> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
