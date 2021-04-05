import * as React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext"
import {useState, useEffect, useContext} from 'react';
import cargando from '../mocks/images/cargando.gif';
import ProductosCarrito from '../Cart/ProductosCarrito';

const Cart = (CProduct) => {
    const {pTotal,Product,qCart}= useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [nombre, setNombre] = useState([])
    const [apellido, setApellido] = useState([])
    const [email, setEmail] = useState([])
    const [telefono, setTelefono] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    const CartItems = () => {

        if (qCart () >= 1){
            return <>
            <div>
                <h2>Su Compra</h2>
                <ProductosCarrito />
                <h3>Precio Total: ${pTotal()}</h3>
                <Link to={`/checkout`}><button className="cart">Confirmar Compra</button></Link>
            </div>

            </>
        }else {
            return <>
            <h2>No hay productos seleccionados</h2>
            <Link to={`/productos/`}><h3>Volver a Productos</h3></Link>
            </>
        }
    }
    return (
        <>
        {loading ? <div><h2>Cargando productos seleccionados....</h2><img className="cargando" src={cargando} alt=''/></div> : <><CartItems /></>}
        </>
    )
}

export default Cart;
