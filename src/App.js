import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import ProdDetail from "./pages/prodDetail";
import CreerCompte from "./pages/CreerCompte";
import Favoris from "./pages/Favoris";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/CreationCompte";
import NotFound from "./pages/NotFound";
import AddProd from "./pages/AddProd"
import AccountPage from "./pages/AccountPage";
import GestionAnnonces from "./pages/GestionAnnonces";

import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <section className="">

      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProdDetail />} />
          <Route path="/CreerCompte" element={<CreerCompte />} />
          <Route path="/AddProd" element={<AddProd />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/maintenance" element={<NotFound />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/GestionAnnonces" element={<GestionAnnonces />} />
        </Routes>
      </main>

    </section>
  );
};

export default App;
