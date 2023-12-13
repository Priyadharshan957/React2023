import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <body>
      <div>
        <form>
          <h1>NEW USERS</h1>
          <label htmlFor='name'>Name:</label>
          <input type="text" id='name' required/>

          <label htmlFor='email'>Email:</label>
          <input type="email" id='email' required/>

          <label htmlFor='newPassword'>Password:</label>
          <input type="password" id='newPassword' required/>

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input type="password" id='confirmPassword' required/>
        <div class="btn">  
          <input type="submit" value="Sign Up"/>
        </div>  
        </form>
      </div>
    </body>
  );
}
export default Signup;