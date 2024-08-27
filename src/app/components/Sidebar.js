import React from 'react';
import { FaTachometerAlt, FaIcons, FaMap, FaBell, FaUser, FaTable, FaFont, FaLanguage } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div style={brandStyle}>CT</div>
      <div style={menuStyle}>
        <div style={menuItemStyle}>
          <FaTachometerAlt style={menuIconStyle} /> Dashboard
        </div>
        <div style={menuItemStyle}>
          <FaIcons style={menuIconStyle} /> Icons
        </div>
        <div style={menuItemStyle}>
          <FaMap style={menuIconStyle} /> Maps
        </div>
        <div style={menuItemStyle}>
          <FaBell style={menuIconStyle} /> Notifications
        </div>
        <div style={menuItemStyle}>
          <FaUser style={menuIconStyle} /> User Profile
        </div>
        <div style={menuItemStyle}>
          <FaTable style={menuIconStyle} /> Table List
        </div>
        <div style={menuItemStyle}>
          <FaFont style={menuIconStyle} /> Typography
        </div>
        <div style={menuItemStyle}>
          <FaLanguage style={menuIconStyle} /> RTL Support
        </div>
      </div>
    </div>
  );
};

const sidebarStyle = {
  width: '250px',
  background: 'linear-gradient(to bottom, #e04ecb, #c053ef)',
  color: '#ffffff',
  height: '100vh',
  paddingTop: '20px',
  paddingLeft: '10px',
};

const brandStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const menuStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const menuItemStyle = {
  fontSize: '18px',
  margin: '15px 0',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const menuIconStyle = {
  marginRight: '10px',
};

export default Sidebar;
