import { CartContext } from "../Context/CartContext"
import {useState, useContext} from "react";

const ProductosCarrito = ({cartProd}) => {
    const {eliminarProducto, pTotal, product, qCart} = useContext(CartContext)
    return (
        <div className="d-flex flex-row cardCart justify-content-between">
            <div className="d-flex flex-column">
                <h3>{cartProd.name}</h3>
                <div className="d-flex flex-row">
                    <h4>Cantidad {cartProd.cantidad}</h4>
                    <h4>Precio:{cartProd.price}</h4>
                </div>
                <h4 className="delete-item" onClick={() => deleteProd(cartProd)}>Eliminar producto</h4>

            </div>
            <div className="d-flex flex-column">
                <h4>Subtotal</h4>
                <h3 className="totalProd d-flex align-self-center">${cartProd.price*cartProd.cantidad}</h3>
            </div>   
            
        </div>
    )
}

export default ProductosCarrito
