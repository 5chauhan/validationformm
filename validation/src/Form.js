import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
     <div className='body'>
          <img className='form-img-body' src='img/img22.jpg' alt='loginpage' />
        </div>



      <div className='form-container'>
      
        <div className='form-content-left'>
          <img className='form-img' src='img/img2.png' alt='signup' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
