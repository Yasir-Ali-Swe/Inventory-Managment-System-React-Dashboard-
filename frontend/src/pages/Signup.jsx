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
    <div className='min-h-screen w-screen bg-primary flex justify-center items-center p-4'>
      <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-secondary rounded-lg shadow-lg'>
        <div className='my-6 lg:my-8 px-4'>
          <h1 className='text-2xl lg:text-3xl text-textColor font-black text-center'>Signup</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-4 lg:px-8'>
          <input 
            type="text" 
            placeholder='Name' 
            className='w-full h-12 lg:h-14 rounded-lg bg-primary text-textColor px-4 focus:outline-none focus:ring-2 focus:ring-tertiary my-3 lg:my-4 text-base lg:text-lg'
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder='Email' 
            className='w-full h-12 lg:h-14 rounded-lg bg-primary text-textColor px-4 focus:outline-none focus:ring-2 focus:ring-tertiary my-3 lg:my-4 text-base lg:text-lg'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder='Password' 
            className='w-full h-12 lg:h-14 rounded-lg bg-primary text-textColor px-4 focus:outline-none focus:ring-2 focus:ring-tertiary my-3 lg:my-4 text-base lg:text-lg'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            className='w-full h-12 lg:h-14 rounded-lg bg-tertiary text-textColor my-3 lg:my-4 cursor-pointer text-base lg:text-lg font-semibold hover:bg-opacity-80 transition-colors'
            onClick={handleSignup}
          >
            Signup
          </button>
          <h1 className='text-base lg:text-lg text-textColor font-bold my-4 text-center'>
            Already have an account? 
            <Link to={'/login'} className='text-tertiary cursor-pointer underline ml-1'>Login Now</Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Signup;