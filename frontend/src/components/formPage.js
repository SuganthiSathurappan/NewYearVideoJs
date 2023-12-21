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
      <Link to={`/video-player/${encryptName('Shankar')}`}>Shankar's Link</Link>
      <br />
      <Link to={`/video-player/${encryptName('Venkatesh')}`}>Venkatesh's Link</Link>
    </div>
  );
};

export default FormPage;
