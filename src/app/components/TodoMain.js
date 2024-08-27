import React from 'react'
import Todo from './Todo'
import Sidebar from './Sidebar';
import Header from './Header';

const TodoMain = () => {
    return (
        <div style={appStyle}>
          <Sidebar />
          <div style={mainContentStyle}>
            <Header />
            <div style={mainContainer}><Todo /></div>
          </div>
        </div>
      );
    }
    
    const appStyle = {
      display: 'flex',
      // width:'100%'
    };
    
    const mainContentStyle = {
      // flex: 1,
      width:'100%',
      padding: '20px',
    };
    
    const mainContainer = {
      width:'50%',
      padding: '20px',
    };

export default TodoMain