import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./components/data.js"


const display = document.getElementById("root")

function App(){
  const cards = data.map(element => {
    return (
        <Card 
            key = {element.id}
            item = {element}
        />
    )
  })

  return(
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
      {cards}
      </section>
    </div>
  )
}

ReactDOM.render(<App />, display)
