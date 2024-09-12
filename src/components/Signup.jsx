import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreedToTerms: false,
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    const { username, email, password, agreedToTerms } = formData;
    if (username.length < 5) {
      alert('Username must be at least 5 characters long.');
      return;
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (password.length < 5) {
      alert('Password must be at least 5 characters long.');
      return;
    }
    if (!agreedToTerms) {
      alert('You must agree to the terms of use and privacy policy.');
      return;
    }

    console.log('Form data submitted:', formData);
    navigate('/'); 
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input
            name='username'
            value={formData.username}
            onChange={changeHandler}
            type='text'
            placeholder='Your Name'
            required
            minLength={5}
          />
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type='email'
            placeholder='Email Address'
            required
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
            required
            minLength={5}
          />
        </div>
        
        <p className='loginsignup-login'>
          Already have an account? <button type="button" onClick={() => navigate('/login')}>Login here</button>
        </p>
        
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={changeHandler}
            required
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button type="button" onClick={handleSubmit}>Continue</button>
      </div>
    </div>
  );
};

export default LoginSignup;
