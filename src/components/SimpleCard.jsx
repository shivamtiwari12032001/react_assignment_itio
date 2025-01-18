import React from 'react';
import { FaFileInvoice, FaWallet, FaBitcoin, FaTicketAlt } from 'react-icons/fa';

const SimpleCard = ({Icon,text,color}) => {
  return (
    <div className='simple-card'>
      <div  style={{display:'flex',flexDirection:'column',alignItems:'center',rowGap:'1em'}}>
        <span style={{fontSize:'1em',fontWeight:'bold'}}>{text}</span>
        <Icon size={24} color={color} />
      </div>
    </div>
  );
};

export default SimpleCard;
