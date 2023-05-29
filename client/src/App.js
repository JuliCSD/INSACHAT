import "./styles.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import DetailPage from "./detailPage";
import Footer from "./footer";
import Header from "./navbar";
import Favorites from "./Favorites";
import MainPage from "./mainPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
