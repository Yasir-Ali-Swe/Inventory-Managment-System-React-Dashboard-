import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/');
  }
  return (
    <div className='h-screen w-screen bg-primary flex justify-center items-center'>
      <div className='w-[25%] py-8 bg-secondary'>
        <div className='mb-8'>
          <h1 className='text-3xl text-textColor font-black text-center'>Login</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <input type="text" placeholder='Email' className='w-[80%] h-10 rounded-lg bg-primary text-textColor px-3  focus:outline-none focus:ring-2 focus:ring-tertiary my-4'onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder='Password' className='w-[80%] h-10 rounded-lg bg-primary text-textColor px-3   focus:outline-none focus:ring-2 focus:ring-tertiary my-4' onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={handleLogin} className='w-[80%] h-10 rounded-lg bg-tertiary text-textColor my-4 cursor-pointer'>Login</button>
          <h1 className='text-lg text-textColor font-bold'>Don't have an account? <Link to={'/signup'} className='text-tertiary cursor-pointer underline'>Register Now</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default Login;