import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
             <h1 className="header-title">AMI Security Monitor</h1>
              <img src="/bmc-logo-reversed.svg" alt="BMC Software" className="footer-logo" />
      </div>
    </header>
  );
};

export default Header;

