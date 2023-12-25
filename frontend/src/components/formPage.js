import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { encrypt } from '../common/cryptoUtils';
import { useParams } from 'react-router-dom';

const FormPage = () => {
  const { id } = useParams();
  console.log(id)
  let customerName = '';

  if (id === 'ay1') {
    customerName = "Ajay"
    console.log(customerName)
  }
  else if (id === 'bi2') {
    customerName = "Balaji"
    console.log(customerName)
  }
  else if (id === 'be3') {
    customerName = "Bougle"
    console.log(customerName)
  }
  else if (id === 'ji4') {
    customerName = "Juhi"
    console.log(customerName)
  }
  else if (id === 'mn5') {
    customerName = "Marwan"
    console.log(customerName)
  }
  else if (id === 'nn6') {
    customerName = "Nipun"
    console.log(customerName)
  }
  else if (id === 'rv7') {
    customerName = "Rajiv"
    console.log(customerName)
  }
  else if (id === 'sa8') {
    customerName = "Saravana"
    console.log(customerName)
  }
  else if (id === 'se9') {
    customerName = "Sophie"
    console.log(customerName)
  }
  else if (id === 'sy10') {
    customerName = "Sunny"
    console.log(customerName)
  }
  else {
    customerName = "Bougle"
    console.log(customerName)
  }

  const encryptName = (name) => encrypt(name);

  return (
    <div className='flex justify-center mt-10'>
      {/* //   <h1>Form Page</h1>
    //   <Link to={`/video-player/${encryptName('Toben')}`}>Toben's Link</Link>
    //   <br />
    //   <Link to={`/video-player/${encryptName('Shankar')}`}>Shankar's Link</Link>
    //   <br />
    //   <Link to={`/video-player/${encryptName('Venkatesh')}`}>Venkatesh's Link</Link>
    // </div> */}

      <div class="w-[500px] ">

        <div class="w-full mb-2">
          {/* <div class="flex justify-center">
          <a href="#" class="text-sm text-opacity-100 float-right mt-6 mb-4 hover:text-blue-600 underline">Forgot Password?</a>
        </div> */}
          <div class="flex justify-start">
            <Link
              class="text-[30px] text-opacity-100 float-left  hover:text-red-600 underline"
              to={`/NewYear-Persionalization/${encryptName(customerName)}`}>Persionalization Video Link</Link>
            {/* <a href="#" class="text-[30px] text-opacity-100 float-left  hover:text-red-600 underline">Persionalization Video Link</a> */}
          </div>
        </div>
        <div class="w-full ">
          <div class="flex justify-start">
            <Link
              class="text-[30px] text-opacity-100 float-left  hover:text-red-600 underline"
              to={`/video-player/${encryptName(customerName)}`}>Interactive Video Link</Link>
            {/* <a href="#" class="text-[30px] text-opacity-100 float-left hover:text-red-600 underline">Intractive Video Link</a> */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default FormPage;
