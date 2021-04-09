import { createContext, useState } from "react";
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const limpiarCarrito = () => {
        setProduct([])
    }
    const addCart = (item) => {
        const isInCart = (id) => {
            return product.findIndex((prod) => prod.item.id === id);
        };
        let estaEnCarrito = isInCart(item.product.id);
        if (estaEnCarrito === -1){
            setProduct([...product, item]);
        }else  {
            let NewItem = {...product[estaEnCarrito], cantidad: product[estaEnCarrito].cantidad + item.cantidad}
            let NewList = product.filter(prod => item.id !== prod.item.id)
            setProduct([...NewList, NewItem])
        }
    };
    const qCart = () => {
        const qtyPerProduct = product.map(p => p.cantidad);
        return qtyPerProduct.reduce((acc, qty) => acc += qty, 0);
    }
    const pTotal = () => {
        const mapPrice = product.map(p => (p.product.Price *p.cantidad));
        return mapPrice.reduce((acc, prc) => acc += prc, 0)
    }
    const eliminarProducto = (prod) => {
        const NewList = product.filter((item) => prod.id !== item.id)
        setProduct(NewList);
    };
    return (
        <CartContext.Provider
        value={{
            product,
            addCart,
            qCart,
            pTotal,
            eliminarProducto,
            limpiarCarrito
        }}
        >
            {children}
        </CartContext.Provider>

        
    );


};

export default CartProvider;
   