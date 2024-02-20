import React, { useState } from 'react';

const UpdatePage = () => {
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files(0));
  };

  return (
    <div>
      <form action="">
        <input type="file" onChange={handleChange} />
        <button>Upload</button>
      </form>
    </div>
  );
};

export default UpdatePage;
