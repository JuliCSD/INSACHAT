
import React, { useRef,useState, useEffect } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Alert from '../components/alert';

const SignForm2 = () => {
  const navigate = useNavigate();
  const [invalidLogin, setInvalidLogin] = useState(false);


  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('no token');
    } else {
      console.log('token found');
      navigate('/');
    }
  }, []);

  const handleInputChange = (event) => {
    setUserInput({
        ...userInput,
        [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    const user = {
      ...userInput,
  };
  axios.post('http://localhost:5000/login', user)
      .then(response => {

        
          
          console.log(response);
          localStorage.setItem('token', response.data.token); // store token in local storage
          console.log('token stored');
          console.log(response.data.token);
          setUserInput({
              email: '',
              password: '',
          });
          navigate('/');

        
      })
      .catch(error => setInvalidLogin(true));
    event.preventDefault();
  } 


  return (
    <div className="w-full h-screen py-10 px-1 sm:px-5 flex flex-col items-center bg-[url('https://pixabay.com/get/g74d4571f3f0c32a68bf85c4c4436af6a828a51ccb4ab21b908bdf1be89519e4700558d7a878861d58de57e10bdb36dbf_1920.jpg')] "> {/* Container */}
     
     {invalidLogin && (
                  <Alert message="Email ou mot de passe erroné ! " />
      )}

      <div className='mt-8' />

      {/* :LOGIN CONTAINER */}
      <div className="w-full md:w-3/4 max-w-5xl grid grid-cols-2 border border-gray-200 rounded-2xl bg-white text-gray-500 shadow-2xl overflow-hidden">


        {/* ::Login Side */}
        <div className="col-span-2 lg:col-span-1 py-10 px-10">

          {/* :::Login form */}
          <a href="/" >
            <button className="flex items-center space-x-1 text-gray-600 hover:text-rose-800 py-4">
            <ChevronLeftIcon className="w-5 h-5" />
            <span>Back</span>
          
          </button>
          </a>



          <form action="" className="flex flex-col items-right justify-end" onSubmit={handleSubmit}>
         
            {/* Email */}
            <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
              <span className="pl-2 pr-4 border-r border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <label htmlFor="email" className="py-2">
              <input id="email" type="email" name="email" onChange={handleInputChange} className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none" placeholder="Email" required/>
              </label>
            </div>
            {/* Password */}
            <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
              <span className="pl-2 pr-4 border-r border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </span>
              <label htmlFor="password" className="py-2">
              <input id="password" type="password" name="password" onChange={handleInputChange} className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none" placeholder="Mot de Passe" required/>
              </label>
            </div>
            {/* Options and Login */}
            <div className="w-full py-3 flex justify-between sm:justify-around items-center">
              {/* Remember me */}
              <label htmlFor="remember" className="text-gray-500">
                <input id="remember" type="checkbox" className="input-checkbox mr-2 w-3.5 h-3.5 text-yellow-400 focus:ring-yellow-600"/>
                Se rappeler de moi
              </label>
              {/* Button Login */}
              <button type="submit" className="py-2 px-6 rounded-lg bg-rose-400 text-white font-semibold tracking-wider uppercase transition duration-150 transform hover:scale-105 hover:bg-rose-500">Login</button>
            </div>
          </form>

          {/* :::Additional options */}
          <div className="mt-2 flex justify-around items-center text-sm">
            {/* Register now */}
            <a href="/signup" className="text-rose-500 font-bold transition duration-150 hover:scale-125">S'inscrire</a>
            {/* Forgot password */}
            <a href="#link" className="hover:underline">Mot de passe oublié?</a>
          </div>
          
      
        </div>

        {/* ::Illustration */}
        <div className="relative lg:col-span-1 w-full h-full ">
          <img src="https://pixabay.com/get/gaac1c4d294e5ba90ff536c73e6d447b989ba09719a3be677cd98e27b9e56538acc30687710df466008fda198e13e7712.jpg" alt="" className="absolute w-full h-full object-cover"/>
        </div>

      </div>


    </div>
  )
}
export default SignForm2