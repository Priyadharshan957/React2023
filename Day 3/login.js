import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic username validation
    if (username === '') {
      alert('Username must be filled');
      return;
    }

    // Basic password validation
    if (password === '') {
      alert('Password must be filled');
      return;
    }

    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem(username);

    if (storedUserData) {
      const storedPassword = JSON.parse(storedUserData).password;

      // Check if the entered password matches the stored password
      if (password === storedPassword) {
        // Successful login
        nav("/Home");
      } else {
        alert('Incorrect password');
      }
    } else {
      // Display an appropriate error message for non-existing usernames
      alert('User does not exist. Please sign up.');
      // Optionally, you can navigate to the Signup page for a new user
      // nav("/Signup");
    }
  };

  return (
    <div className='wrap'>
      <form method='post'>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder='Username'
            id='name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            minLength={8}
            placeholder='Password'
            id='pass'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Link to='/Home'><button type='submit' onClick={handleLogin}>Login</button></Link>
        <br />
        <div className='register2'>
          <p>
            Don't have an account?
            <Link to='/Signup' className='links'> Signup </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
