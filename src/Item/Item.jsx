import {card, price,cardButton,} from "./item.module.scss";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";

const Item = ({product}) => {
    return (
        <div className={card}>
            <h1>{product.name}</h1>
            <h2>{product.modelo}</h2>
            <p>{product.descripcion}</p>
            <p className={price}>${product.price}</p>
            <h1> stock {product.stock}</h1>
            
            <Link to={`/productos/${product.id}`}><button className={cardButton}>Comprar</button></Link>
        
        </div>
    )
}

export default Item;
