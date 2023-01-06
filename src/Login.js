import React from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    let navigate = useNavigate();

    const handleClick = () =>{
        navigate('/dashboard');
    }
  return (
    <form className='login'>
      <h1>Log In</h1>
      <input type='email' placeholder='Enter Your Email' /> <br/><br/>
      <input type='password' placeholder='Enter Your Password' />
      <br/> <br/>
      <button type='submit' onClick={handleClick} >Log In</button>
    </form>
  )
}

export default Login;
