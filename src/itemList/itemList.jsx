import Item from "../Item/Item.js";

const ItemList = ({ products }) => {
    return (
        <div>
            <ul className="producto">
                {products.map((product) => {
                    return <Item key={product.id} product={product}/>
                })}
            </ul>
        </div>
    )
}

export default ItemList;
