import { CartContext } from "../Context/CartContext"
import { useContext } from 'react';

const CartItem = ({cartProd}) => {
    const {eliminarProducto, ptotal, product, qCart } = useContext(CartContext)
    return (
        <div className="d-flex flex-row cardCart justify-content-between">
            <div className="d-flex flex-column">"
                <h3 className="titleCart">{cartProd.name}</h3>
                <div className="d-flex flex-row">
                    <h4 className="dato-compra">cantidad: {cartProd.cantidad}</h4>
                    <h4 className="dato-compra">precio: ${cartProd.price}</h4>
                </div>
                <h4 className="eliminarProducto" onClick={() => eliminarProducto(cartProd)}>Eliminr Producto</h4>

            </div>
            <div className="d-flex flex-column">
                <h2>Subtotal</h2>
                <h3 className="productoTotal d-flex align-self-center">${cartProd.price*cartProd.cantidad}</h3>
            </div>
            
        </div>
    )
}

export default CartItem;
