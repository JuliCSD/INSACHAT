import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cat from "../components/Cat";
import axios from 'axios'



const Home = ({ currentSearch, setCurrentSearch }) => {

  const verify = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('no token');
    }else{
    const headers = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    axios.get(`http://localhost:5000/VerifyExpire`,headers)
        .then(response => {
            if(response.data === 'expired'){
                console.log('expired');
                localStorage.removeItem('token');
            }
        })
    }
};

useEffect(() => {
    verify();
}, []);


  

  return (


    
    <>
    
    <Navbar currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
    
    
    <Cat currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>

    <Footer />
    <div className="home">
    
      <Bottomalert />
    </div>

    </>
  );
};

export default Home;
