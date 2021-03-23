import {card, price, cardButton } from "./item.module.scss";

const Item = ({product}) => {
    return (
        <div className={card}>
            <h3>{product.name}</h3>
            <h3>{product.modelo}</h3>
            <h3 className={price}>{product.price}</h3>
            <button className={cardButton}>Agregar al carrito</button>
        </div>
    )
}

export default Item;
