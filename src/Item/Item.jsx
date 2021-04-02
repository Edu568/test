import {card, price,cardButton,} from "./item.module.scss";

const Item = ({product}) => {
    return (
        <div className={card}>
            <h1>{product.name}</h1>
            <p>{product.modelo}</p>
            <p>{product.descripcion}</p>
            <p className={price}>${product.price}</p>
            <h1> stock {product.stock}</h1>
            <p><button className={cardButton}>Agregar al carrito</button></p>
        
        </div>
    )
}

export default Item
