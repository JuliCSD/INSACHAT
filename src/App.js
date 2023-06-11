import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import ProdDetail from "./pages/prodDetail";
import CreerCompte from "./pages/CreerCompte";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/CreationCompte";
import NotFound from "./pages/NotFound";
import AddProd from "./pages/AddProd"

import { Route, Routes } from "react-router-dom";

const App = () => {

  const [currentSearch, setCurrentSearch] = useState('');

  return (
    <section className="">

      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>} />
          <Route path="/product/:id" element={<ProdDetail currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>} />
          <Route path="/CreerCompte" element={<CreerCompte />} />
          <Route path="/AddProd" element={<AddProd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </section>
  );
};

export default App;
