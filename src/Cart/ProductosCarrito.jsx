import * as React from "react";
import { CartContext } from "../Context/CartContext"
import {useState, useEffect, useContext} from "react";
import CartList from "../CartList";

const ProductosCarrito = ({cartProd}) => {
    const { product } = useContext(CartContext)
    const [cartProds, setCartProds] = useState([])
    useEffect(() => {
        const myPromise = new Promise ((resolve,reject) => {
            setTimeout(() =>
                resolve(product),300);
            
        });

        myPromise.then((result) => setCartProds(result));

    }, []);
    return (
        <div className="productContainerCart">
            <CartList cartProds={cartProds}/>
            
        </div>
    )
}

export default ProductosCarrito;
