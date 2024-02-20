import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserData } from 'redux/auth/auth.selector';

const ProfilePage = () => {
  const userData = useSelector(selectUserData);

  const isAvatar = userData.avatar.includes('gravatar')
    ? userData.avatar
    : `http://localhost:8000/${userData.avatar}`;

  return (
    <div>
      <NavLink to="/profile/update" className="user-name">
        Update
      </NavLink>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
      <img src={isAvatar} alt={userData.name} />
    </div>
  );
};

export default ProfilePage;
