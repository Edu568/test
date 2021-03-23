import React from "react";
import { card, price, cardButton } from "./card.module.scss"

const Card = ({marca, modelo, precio}) => {
    return (
        <div className={card}>
            <h4>{marca}</h4>
            <p className>{modelo}</p>
            <p className={price}>{precio}</p>
            <p><button className={cardButton} >Agregar al carrito</button></p>
        </div>
    )
}

export default Card;
