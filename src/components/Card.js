import React from "react";

function Card(props){
    return(
        <section className="card-container">
            <img src={process.env.PUBLIC_URL + `/images/${props.img}`} alt="element" className="card-photo"/>
            <div className="card-stats">
                <img src={process.env.PUBLIC_URL + "/images/star.png"} alt="star" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}

export default Card;