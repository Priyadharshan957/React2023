import React , { useState }from 'react';
import './signup.css';
import {Link,useNavigate} from 'react-router-dom';
const Signup = () =>{
    const nav = useNavigate();
    const[username, SetUsername] = useState('');
    const[password, SetPassword] = useState('');
    const[email, SetEmail] = useState('');
    
  const handleSignup = (e) => {
    e.preventDefault();
    if(username === ''){
      alert('Username must be filled');
    }
    else if(password === ''){
      alert('Password must be filled');
    }
    else if(email === ''){
      alert('Email must be filled');
    }
    else{
        nav("/Home");
    }
  }
    return(
        <div className='wrap1'>
            <form action="">
                <h1>Sign up</h1>
                <div className="input-box1">
                  <input type="text" placeholder='Name' required/>
                </div>
                <div className="input-box1">
                  <input 
                    type="email" 
                    placeholder='Email' 
                    id='name'
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box1">
                  <input 
                    type="text" 
                    placeholder='Username' 
                    id='name'
                    value={username}
                    onChange={(e) => SetUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box1">
                  <input 
                    type="password" 
                    minLength={8} 
                    placeholder='Password' 
                    id='pass'
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                    required/>
                  </div>
                <button type='submit' onClick={handleSignup}>Sign up</button>
            </form>
        </div>
    )
}
export default Signup;