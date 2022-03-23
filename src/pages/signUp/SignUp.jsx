import React from "react";

import Sign from "../../components/SignComponent/SignComponent";
const SignUp = () => {
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-7 d-flex'>
            <img
              className='img-fluid w-100'
              src='/images/bgg.svg'
              alt='Picture of the author'
            />
          </div>
          <div className='col-md-5 mt-4'>
            <Sign />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
