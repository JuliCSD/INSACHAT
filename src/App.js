import React from "react";
import Home from "./pages/Home";
import ProdDetail from "./pages/prodDetail";
import CreerCompte from "./pages/CreerCompte";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";


const App = () => {

  return (
    <section className="">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProdDetail />} />
          <Route path="/CreerCompte" element={<CreerCompte />} />
        </Routes>
      </main>

      <Footer />

    </section>
  );
};

export default App;
