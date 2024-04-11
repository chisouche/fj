// AuthPage.js
import React, { useState } from 'react';
import Login from './login.js';
import SignUp from './signup.js';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
      <button onClick={toggleForm}>{isLogin ? 'Switch to Sign Up' : 'Switch to Login'}</button>
    </div>
  );
}

export default AuthPage;
