import React from "react";
import Home from "./pages/Home";
import ProdDetail from "./pages/prodDetail";
import CreerCompte from "./pages/CreerCompte";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/CreationCompte";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";


const App = () => {

  return (
    <section className="">

      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProdDetail />} />
          <Route path="/CreerCompte" element={<CreerCompte />} />
        </Routes>
      </main>

    </section>
  );
};

export default App;
