import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sobre from "./components/Sobre";
import Equipe from "./components/Equipe";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Sobre />
        <Equipe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
