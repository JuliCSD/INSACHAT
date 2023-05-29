import "./styles.css";

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DetailPage from "./scenes/detailPage";
import Footer from "./scenes/footer";
import Header from "./scenes/navbar";

export default function App() {
  return (<div className="App">
    <Header />
    <DetailPage />
    <Footer />
  </div>);
}