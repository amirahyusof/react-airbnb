import React from "react";

function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <section className="card-container">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={process.env.PUBLIC_URL + `/images/${props.item.coverImg}`} alt="element" className="card-img"/>
            <div className="card-stats">
                <img src={process.env.PUBLIC_URL + "/images/star.png"} alt="star" className="card-star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) . </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </section>
    )
}

export default Card;