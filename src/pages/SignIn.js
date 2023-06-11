
import React, { useRef,useState, useEffect } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignForm2 = () => {
  const navigate = useNavigate();

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
      axios.get('http://localhost:5000/verifyToken', { headers: { "x-access-token": token } })
      .then(response => {
          console.log(response);
          navigate('/');
      })
      .catch(error => {
          localStorage.removeItem('token');
      });
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
      .catch(error => console.log(error));
    event.preventDefault();
  } 


  return (
    <div className="w-full py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-t from-white via-rose to-rose-200 font-body"> {/* Container */}



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
            <a href="/signup" className="text-rose-500 transition duration-150 transform hover:scale-105">S'inscrire</a>
            {/* Forgot password */}
            <a href="#link" className="hover:underline">Mot de passe oublié?</a>
          </div>
          
          {/* :::Divide line */}
          <div className="my-10 flex items-center justify-center text-xl">
            <span className="w-full mr-4 h-px bg-gray-300"/>
            ou
            <span className="w-full ml-4 h-px bg-gray-300"/>
          </div>

          {/* :::External Autentification */}
          <div className="flex flex-col items-center text-white">
            <button className="hover:scale-105 ease-in-out duration-150 mb-2.5 py-3 px-5 rounded-md flex justify-between items-center bg-blue-800 font-semibold uppercase tracking-wider hover:bg-blue-900">
              <svg role="img" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 mr-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Login avec Facebook
            </button>
            <button className="hover:scale-105 ease-in-out duration-150 mb-2.5 py-3 px-7 rounded-md flex justify-between items-center bg-sky-400 font-semibold uppercase tracking-wider hover:bg-sky-500">
              <svg role="img" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 mr-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Login avec Twitter
            </button>
            <button className="hover:scale-105 ease-in-out duration-150 mb-2.5 py-3 px-7 rounded-md flex justify-between items-center bg-red-500 font-semibold uppercase tracking-wider hover:bg-red-600">
              <svg role="img" className="flex-shrink-0 w-5 h-5 mr-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              Login avec Google
            </button>
          </div>

        </div>

        {/* ::Illustration */}
        <div className="relative hidden lg:block lg:col-span-1 w-full h-full bg-gray-200">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguBrHalb_LqfqDkOK-zos1tJ5RFBPmwdMWueQrhjjnQ&s" alt="" className="absolute w-full h-full object-contain"/>
        </div>

      </div>


    </div>
  )
}
export default SignForm2