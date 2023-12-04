import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";


const display = document.getElementById("root")

function App(){

  return(
    <div>
      <Navbar />
      <Hero />
      <Card
      img = "katie-zaferes.png"
      rating = "5.0"
      reviewCount = {6}
      country = "USA"
      title = "Life Lessons with katie Zaferes"
      price = {136}
       />
    </div>
  )
}

ReactDOM.render(<App />, display)
