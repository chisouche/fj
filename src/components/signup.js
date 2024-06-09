// src/components/Signup.js
import React, { useState } from 'react';
import authService from '../utils/authService'; // Import the service file
// import axios from 'axios';
import "../styles/css/accountCreate.css";
import "../styles/css/signup.css";
import logo from '../assets/images/food_logo.jpg';
import { validateEmail, validatePassword } from '../utils/signup_validation';

const calculatePasswordStrength = (password) => {
  const criteria = [
    { regex: /[A-Z]/, label: 'uppercase', weight: 1 },
    { regex: /[a-z]/, label: 'lowercase', weight: 1 },
    { regex: /\d/, label: 'digit', weight: 1 },
    { regex: /[!@#$%^&*()]/, label: 'specialCharacter', weight: 1 },
    { test: (password) => password.length >= 8, label: 'length', weight: 1 },
    { test: (password) => password.length > 10, label: 'length_more_than_10', weight: 1 },
  ];

  let score = 0;
  criteria.forEach((criterion) => {
    if ((criterion.regex && criterion.regex.test(password)) || (criterion.test && criterion.test(password))) {
      score += criterion.weight;
    }
  });

  if (score >= 8) {
    return 'very strong';
  } else if (score >= 5) {
    return 'strong';
  } else if (score >= 3) {
    return 'medium';
  } else {
    return 'weak';
  }
};

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordCriteriaFailed, setPasswordCriteriaFailed] = useState([]);
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [username, setUsername] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    const isValidEmail = validateEmail(value);
    setEmailMessage(isValidEmail ? '' : 'Please enter a valid email address');
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    const criteriaFailed = validatePassword(value, ['uppercase', 'lowercase', 'digit', 'specialCharacter', 'length']);
    setPasswordCriteriaFailed(criteriaFailed || []);
    setPasswordStrength(calculatePasswordStrength(value));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password === '' || confirmPassword === '' || username === '') {
      setSubmissionMessage('Please fill in all fields.');
      return;
    }
    const emailValid = validateEmail(email);
    if (!emailValid) {
      setSubmissionMessage('Invalid email address.');
      return;
    }
    const passwordValid = passwordCriteriaFailed.length === 0;
    if (!passwordValid) {
      setSubmissionMessage('Password does not meet criteria.');
      return;
    }
    if (password !== confirmPassword) {
      setSubmissionMessage('Passwords do not match.');
      return;
    }
    
    // Proceed with form submission (API call)
    try {
      const userData = { username, email, password };
      const response = await authService.signup(userData);
      setSubmissionMessage('Submission successful!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUsername('');
      setPasswordCriteriaFailed([]);
      setPasswordStrength('');
      console.log('Form submitted successfully', response);
    } catch (error) {
      setSubmissionMessage(error.message);
      console.error('There was an error!', error);
    }
  };
  
  

  return (
    <div className='auth_body'>
      <div className='auth_container'>
        <div className='top_'>
          <div className='logo_container'>
            <a href="/" className='brand_logo'><img src={logo} alt="FOODJET" /></a>
          </div>
          <div className='spacerbtw'></div>
          <div className='Signup_div'>
            <button className='signUp_btn'>Log in</button>
          </div>
        </div>
        <div className='signup_sections'>
          <div className='signups'>
            <div className='signup_title'>
              <span className='login_account_'>Sign up for an account</span>
              <div className='socials_opt'>
                <span className='log_in_with'>Sign up with</span>
                <div className='icons'>
                  <a href="/" className='brand_logo'><span className='fb_icon'></span></a>
                  <a href="/" className='brand_logo'><span className='gg_icon'></span></a>
                  <a href="/" className='brand_logo'><span className='ap_icon'></span></a>
                </div>
              </div>
            </div>
            <div className='forms_'>
              <form onSubmit={handleSubmit}>
                <div className='signup_inputs_forms'>
                  <input type='text' placeholder='Email' value={email} onChange={handleEmailChange} />
                  {emailMessage && <span className='error_message'>{emailMessage}</span>}
                  <input type='text' id='u_name' name='user_name' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                  <div className='password_container'>
                    <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} onFocus={() => setPasswordFocused(true)} onBlur={() => setPasswordFocused(false)} />
                    {passwordFocused && passwordCriteriaFailed.length > 0 && (
                      <div className='password_criteria'>
                        {passwordCriteriaFailed.includes('uppercase') && <p className='invalid'>At least 1 uppercase letter</p>}
                        {passwordCriteriaFailed.includes('lowercase') && <p className='invalid'>At least 1 lowercase letter</p>}
                        {passwordCriteriaFailed.includes('digit') && <p className='invalid'>At least 1 digit</p>}
                        {passwordCriteriaFailed.includes('specialCharacter') && <p className='invalid'>At least 1 special character (!@#$%^&*())</p>}
                        {passwordCriteriaFailed.includes('length') && <p className='invalid'>Password should be at least 8 characters long</p>}
                      </div>
                    )}
                  </div>
                  {password && (
                    <div className='password-strength'>
                      Password Strength: <span className={`password-strength--${passwordStrength}`}>{passwordStrength}</span>
                    </div>
                  )}
                  <input type='password' placeholder='Re-enter Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  {submissionMessage && <span className='error_message'>{submissionMessage}</span>}
                </div>
                <div className='below_opts'>
                  <span className='forgot_p'>Already have an account? Log in here</span>
                  <button type='submit' className='login_done' disabled={email === '' || password === '' || confirmPassword === '' || passwordCriteriaFailed.length > 0}>Register</button>
                </div>
              </form>
            </div>
          </div>
          <div className='illustration'></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
