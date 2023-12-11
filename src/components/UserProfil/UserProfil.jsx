import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/auth.selector';
import { authLogOut } from 'redux/auth/operations';

const UserProfil = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUserData);
  const OnClickLogOut = () => {
    dispatch(authLogOut());
  };

  return (
    <div>
      {name ?? <p>Name: {name}</p>}

      <button type="button" onClick={OnClickLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserProfil;
