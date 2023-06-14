// afficher les annonces 
// et una facon de sup anonce 


import { useState,useEffect } from "react";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CatGestion from "../components/CatGestion";
import axios from 'axios'



const GestionAnnonces = ({ currentSearch, setCurrentSearch }) => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('no token');
    } else {
      console.log('token found');
      console.log(token);
      axios.get(`http://localhost:5000/getName`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(`Response from server: ${JSON.stringify(response.data)}`);
      })
      .catch(error => console.log(`Error getting name: ${error}`));
    }
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