import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import {useContext} from "react";
import CartItem from "../CartItem/index";

const CartList = ({cartProds}) => {
    const {ptotal, product, qcart} = useContext(CartContext)

    return (
        <div className="producto">
            {cartProds.map((cartProd) => {
                return <>
                <CartItem key={cartProd.id} cartProd={cartProd} />
                </>
            })}
                
            
        </div>
    )
}

export default CartList
