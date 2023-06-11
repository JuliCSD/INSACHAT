import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cat from "../components/Cat";


const Home = ({ currentSearch, setCurrentSearch }) => {

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