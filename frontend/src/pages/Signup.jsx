import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(name,email, password);
    navigate('/login');
  }
  return (
    <div className='h-screen w-screen bg-primary flex justify-center items-center'>
      <div className='w-[25%]  bg-secondary'>
        <div className='my-8'>
          <h1 className='text-3xl text-textColor font-black text-center'>Signup</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <input type="text" placeholder='Name' className='w-[80%] h-10 rounded-lg bg-primary text-textColor px-3  focus:outline-none focus:ring-2 focus:ring-tertiary my-4' onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder='Email' className='w-[80%] h-10 rounded-lg bg-primary text-textColor px-3  focus:outline-none focus:ring-2 focus:ring-tertiary my-4' onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder='Password' className='w-[80%] h-10 rounded-lg bg-primary text-textColor px-3   focus:outline-none focus:ring-2 focus:ring-tertiary my-4' onChange={(e) => setPassword(e.target.value)}/>
          <button className='w-[80%] h-10 rounded-lg bg-tertiary text-textColor my-4 cursor-pointer' onClick={handleSignup}>Signup</button>
          <h1 className='text-lg text-textColor font-bold my-4'>Already have an account? <Link to={'/login'} className='text-tertiary cursor-pointer underline'>Login Now</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default Signup;