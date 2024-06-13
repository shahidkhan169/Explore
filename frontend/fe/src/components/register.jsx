import React, { useState } from 'react';
import img from '../assets/logbg.jpg';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        if (isRegistering) {
            console.log('Confirm Password:', confirmPassword);
        }
    }

    function toggleMode() {
        setIsRegistering(!isRegistering);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div>
            
            <div>
                <div style={{backgroundImage: `url(${img})`, height:'100vh'}} className='bg-cover'>
                <div className='flex justify-between pt-3'>
                <h1 className='text-2xl ml-3 text-black font-bold self-center pl-4'>
                    Journarism
                </h1>
                <ul className='flex flex-row space-x-7 text-black self-center mr-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li><button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    </button></li>
                </ul>

            </div>
                    <div className='pt-40 pl-40'>
                        <div className='self-center box-border w-[25%] h-auto bg-black bg-opacity-40 shadow-2xl rounded-2xl'>
                            <h1 className='text-white text-3xl pl-10 pt-10 font-bold'>Register</h1>
                            <form className='flex flex-col space-y-3 pt-10 pl-10' onSubmit={handleSubmit}>
                                <label className='text-white'>Email</label>
                                <input type="text" className='w-[70%] h-7 text-center rounded-xl text-white bg-black' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label className='text-white'>Password</label>
                                <input type='password' className='w-[70%] h-7 text-center rounded-xl' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label className='text-white'>Confirm Password</label>
                                    <input type='password' className='w-[70%] h-7 text-center rounded-xl' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <div className='flex justify-center pr-10 pt-3'>
                                <button className='bg-gray-700 w-[25%]  h-8 text-white rounded-lg  hover:font-bold ' type='submit'>Register</button>
                                </div>
                            </form>

                            <div className='pt-4 pl-16 space-x-1'>
                                
                                <button className='hover:text-red-500 pb-3 pl-14' onClick={toggleMode}><Link to="/"> Back to Login</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
