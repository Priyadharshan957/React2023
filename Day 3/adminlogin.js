import React , { useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './adminlogin.css';

const AdminLogin  = () => {
  const nav=useNavigate()
  const[username, SetUsername] = useState('');
  const[password, SetPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    if(username === ''){
      alert('Username must be filled');
    }
    else if(password === ''){
      alert('Password must be filled');
    }
    else if(username==="admin"&&password==="admin"){
       nav("/dashboard")
    }
   else if(username!=="admin" && password!=="admin"){
      nav("/Signup")
    }
  }

  return (
    <div className='wrap'>
      <form method='post'>
        <h1>Welcome Back Admin</h1>
        <div className="input-box">
          <input 
          type="text" 
          placeholder='Username' 
          id='name'
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
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
          onChange={(e) => SetPassword(e.target.value)}
          required/>
        </div>
        
          <button type='submit' onClick={handleLogin}>Login</button>
          <br/>
        <div className='register2'>
            <p>Not an Admin?<Link to='/' className='links'> Customer </Link></p>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin;