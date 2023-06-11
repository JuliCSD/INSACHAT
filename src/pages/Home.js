import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cat from "../components/Cat";


const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('no token');
    } else {
      console.log('token found');
    }
  }, []);


  

  return (


    
    <>
    
    <Navbar />
    
    
    <Cat />

    <Footer />
    <div className="home">
    
      <Bottomalert />
    </div>

    </>
  );
};

export default Home;