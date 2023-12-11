import Loader from 'components/Loader/Loader';
import UserProfil from 'components/UserProfil/UserProfil';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/auth.selector';

const Layout = () => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div className="head-cont">
      <header className="main-header">
        {authenticated ? (
          <>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
            <NavLink className="header-link" to="/contacts">
              PhoneBook
            </NavLink>
            <UserProfil />
          </>
        ) : (
          <>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
            <NavLink className="header-link" to="/register">
              Register
            </NavLink>
            <NavLink className="header-link" to="/login">
              Login
            </NavLink>
          </>
        )}
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
