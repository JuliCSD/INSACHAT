import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cat from "../components/Cat";


const Home = () => {


  

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