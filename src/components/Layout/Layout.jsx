import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="head-cont">
      <header className="main-header">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/login">
          Login
        </NavLink>
        <NavLink className="header-link" to="/register">
          Register
        </NavLink>
        <NavLink className="header-link" to="/contacts">
          PhoneBook
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
