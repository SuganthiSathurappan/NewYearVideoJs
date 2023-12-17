import React from 'react';
import { Link } from 'react-router-dom';
import { encrypt } from '../common/cryptoUtils';

const FormPage = () => {
  const encryptName = (name) => encrypt(name);

  return (
    <div>
      <h1>Form Page</h1>
      <Link to={`/video-player/${encryptName('Toben')}`}>Toben's Link</Link>
      <br />
      <Link to={`/video-player/${encryptName('Sankar kumar')}`}>Sankar kumar's Link</Link>
      <br />
      <Link to={`/video-player/${encryptName('Venkatesh Prabhu')}`}>Venkatesh Prabhu's Link</Link>
    </div>
  );
};

export default FormPage;
