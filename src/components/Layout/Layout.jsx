import Loader from 'components/Loader/Loader';
// import UserProfil from 'components/UserProfil/UserProfil';
import React, { Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
// import { selectAuthenticated } from 'redux/auth/auth.selector';

const Layout = () => {
  return (
    <div className="head-cont">
      <header className="main-header">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>

        <NavLink className="header-link" to="/contacts">
          PhoneBook
        </NavLink>
        {/* <UserProfil /> */}

        <NavLink className="header-link" to="/register">
          Register
        </NavLink>
        <NavLink className="header-link" to="/login">
          Login
        </NavLink>
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

// const authenticated = useSelector(selectAuthenticated);

//  <div className="head-cont">
//    <header className="main-header">
//      <NavLink className="header-link" to="/">
//        Home
//      </NavLink>
//      {authenticated ? (
//        <>
//          {' '}
//          <NavLink className="header-link" to="/contacts">
//            PhoneBook
//          </NavLink>
//          <UserProfil />
//        </>
//      ) : (
//        <>
//          {' '}
//          <NavLink className="header-link" to="/register">
//            Register
//          </NavLink>
//          <NavLink className="header-link" to="/login">
//            Login
//          </NavLink>
//        </>
//      )}
//    </header>
//    <main>
//      <Suspense fallback={<Loader />}>
//        <Outlet />
//      </Suspense>
//    </main>
//  </div>;
