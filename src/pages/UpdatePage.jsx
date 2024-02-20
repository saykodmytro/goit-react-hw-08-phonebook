import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';

const UpdatePage = () => {
  const disputch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    disputch(updateAvatar(file));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>Upload</button>
      </form>
    </div>
  );
};

export default UpdatePage;
