import Item from "../Item/Item"

const itemList = ({ products }) => {
    return (
        <div>
            <ul>
                {products.map((product) => {
                    return <Item key={product.id} product={product}/>
                })}
            </ul>
        </div>
    )
}

export default itemList
