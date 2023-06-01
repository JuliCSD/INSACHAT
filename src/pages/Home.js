import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListProduits from "../components/ListProduits";

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
    <div className="home">
      <button onClick={handleCreerCompte}>Creer Compte</button>
      <ListProduits />
    </div>
  );
};

export default Home;