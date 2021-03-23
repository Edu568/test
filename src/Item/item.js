import {card} from "./item.module.scss";

const Item = ({product}) => {
    return (
        <div className={card}>
            <h3>{product.name}</h3>
            <h3>{product.modelo}</h3>
            <h3>{product.price}</h3>
        </div>
    )
}

export default Item;
