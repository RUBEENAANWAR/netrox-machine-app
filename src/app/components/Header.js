import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Dashboard</div>
      <div style={headerIconsStyle}>
        <FaSearch style={iconStyle} />
        <FaBell style={iconStyle} />
        <FaUserCircle style={iconStyle} />
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#1e1e26',
  color: '#ffffff',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const headerIconsStyle = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  fontSize: '20px',
  marginLeft: '15px',
  cursor: 'pointer',
};

export default Header;
