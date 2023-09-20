import React from "react";
import "./fruitcard.css"

function FruitCard(props) {
    return(
        <div className="fruitCard">
            <h4>{props.textlable}</h4>
        </div>
    )
}

export default FruitCard;