import React from "react";

function Navbar(){
    return(
        <div>
            <nav>
                <img src={ process.env.PUBLIC_URL + "/images/airbnb-logo.png"} alt="logo-airbnb" className="nav--logo" />
            </nav>
        </div>
    )
}

export default Navbar;