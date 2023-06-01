import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bottomalert from "../components/Bottomalert";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cat from "../components/Cat";

const Home = () => {
  const navigate = useNavigate();
  const [CreerCompte, setCreerCompte] = useState(false);

  const handleCreerCompte = () => {
    // Set the state or do any other pre-redirect tasks
    setCreerCompte(true);
    // Redirect to CreerCompte page
    navigate("/CreerCompte");
  }

  return (
    <>
    <Navbar />
    
    <Cat />

    <Footer />
    <div className="home">
      <button onClick={handleCreerCompte}>Creer Compte</button>
      <Bottomalert />
    </div>

    </>
  );
};

export default Home;