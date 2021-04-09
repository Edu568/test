import { CartContext } from "../Context/CartContext"
import { useContext } from 'react';

const CartItem = ({cartProd}) => {
    const {eliminarProducto} = useContext(CartContext)
    return (
        <div className="d-flex flex-row cardCart justify-content-between">
            <div className="d-flex flex-column">
                <h3 className="titleCart">{cartProd.Title}</h3>
                <div className="d-flex flex-row">
                    <h4 className="dato-compra">cantidad: {cartProd.cantidad}</h4>
                    <h4 className="dato-compra">precio: ${cartProd.price}</h4>
                </div>
                <button className="eliminarProducto" onClick={() => eliminarProducto(cartProd)}>Eliminar Producto</button>

            </div>
            <div className="d-flex flex-column">
                <h2>Subtotal</h2>
                <h3 className="productoTotal d-flex align-self-center">${cartProd.product.Price*cartProd.cantidad}</h3>
            </div>
            
        </div>
    )
}

export default CartItem;
