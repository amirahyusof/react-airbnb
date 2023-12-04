import React from "react";

function Card(props){
    return(
        <section className="card-container">
            <img src={`./image/${props.img}`} className="card-photo"/>
            <div className="card-stats">
                <img src="./image/star.png" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </section>
    )
}

export default Card;