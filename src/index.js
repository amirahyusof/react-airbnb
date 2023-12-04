import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./components/data.js"


const display = document.getElementById("root")

function App(){
  const dataElement = data.map(element => {
    return <Card 
    img = {element.coverImg}
    rating = {element.rating}
    reviewCount = {element.reviewCount}
    country = {element.country}
    title = {element.title}
    price = {element.price}
    />
  })

  return(
    <div>
      <Navbar />
      <Hero />
      {Card}
    </div>
  )
}

ReactDOM.render(<App />, display)
