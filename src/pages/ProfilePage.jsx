import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserData } from 'redux/auth/auth.selector';

const ProfilePage = () => {
  const userData = useSelector(selectUserData);
  console.log('userData: ', userData);

  return (
    <div>
      <NavLink to="/profile/update" className="user-name">
        Update
      </NavLink>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
      <img src={userData.avatar} alt={userData.name} />
    </div>
  );
};

export default ProfilePage;
