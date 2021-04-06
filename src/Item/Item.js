import {card, price,cardButton} from "./item.module.scss";
import { Link } from "react-router-dom";
const Item = ({product}) => {
    return <>
        <div className={card}>
            <h3>{product.Title}</h3>
            <p className={price}>${product.Price}</p>
            <h1> stock {product.Stock}</h1>
            
            <Link to={`/productos/${product.id}`}><button className={cardButton}>Comprar</button></Link>
        
        </div>
    </>
    
}

export default Item;


