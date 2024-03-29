import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/auth.selector';
import { authLogOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

const UserProfil = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUserData);
  const OnClickLogOut = () => {
    dispatch(authLogOut());
  };

  return (
    <div className="container-user-profil">
      <p className="user-name"> Name: {name}</p>
      <NavLink to="/profile" className="user-name">
        Profile
      </NavLink>

      <button className="btn-logout" type="button" onClick={OnClickLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserProfil;
