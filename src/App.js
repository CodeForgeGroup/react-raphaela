import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sobre from "./components/Sobre";
import Equipe from "./components/Equipe";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
      <div>
          <Navbar />
          <Banner />
          <Sobre />
          <Equipe />
          <Footer />
      </div>
  );
}

export default App;