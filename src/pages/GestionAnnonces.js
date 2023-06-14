// afficher les annonces 
// et una facon de sup anonce 


import { useState,useEffect } from "react";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CatGestion from "../components/CatGestion";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const GestionAnnonces = ({ currentSearch, setCurrentSearch }) => {

  const navigate = useNavigate();

  const verify = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('no token');
      navigate('/SignIn');
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
                navigate('/SignIn');
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
    
    
    <CatGestion currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>

    <Footer />

    </>
  );
};

export default GestionAnnonces;