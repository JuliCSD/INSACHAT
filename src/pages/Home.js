import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cat from "../components/Cat";
import axios from 'axios'



const Home = ({ currentSearch, setCurrentSearch }) => {

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
    
    
    <Cat currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>

    <Footer />
    <div className="home">
    
      <Bottomalert />
    </div>

    </>
  );
};

export default Home;
