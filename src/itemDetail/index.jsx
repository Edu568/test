import * as React from "react";
import {useState, useContext} from "react";
import ItemCount from "../ItemCount/itemCount";
import {Link} from "react-router-dom";
import {  CartContext } from "../Context/CartContext/index";




const ItemDetail = ({items}) => {
    debugger
    const [contador, setContador] = useState(12)
    const [stock, setStock] = useState(10)
    const [compra, setCompra] = useState("Comprar")
    const [quantity, setQuantity] = useState(0)

    const { addCart , product} = useContext(CartContext);
    
    
    const Load = () => {
        setStock(items.stock)
    }
    const onAdd = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }
    const onSubstract = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }
    const onBuy = () => {
        
        setStock(items.Stock);  
        setQuantity(contador);
        setStock(stock - contador);
        setContador(1);
        if(stock === contador){
            setCompra("No hay stock")
        }

        addCart ({product: items, cantidad: contador, price: items.price, Title: items.Title, id: items.id});
        document.getElementById('Finalizar Compra').style.visibility = "visible";
    }
    console.log([product])

    return (
        <div key={product.id} product={items} onLoad={Load} className="d-flex flex-column justify-content-around itemDetail">
            <h2>{product.Title}</h2>
            <div className="d-flex flex-row justify-content-between">
                <img src={product.Image}></img>
                <div className="d-flex flex-column justify-content-between">

                    <p> Precio:${product.Price}</p>
                    <ItemCount contador={contador} onAdd={onAdd} onSubstract={onSubstract} onBuy={onBuy} compra={compra} stock={stock}/>
                    <div id="Terminar Compra" className="d-flex flex-column justify-items-center confirmaCompra">
                        <p>Se agrego {quantity} {product.Title}al carrito</p>
                        <Link to={`/cart`} quantity={quantity}><button>Finalizar Compra</button></Link>
                    </div>
                </div>
            </div>
            <p>Descripcion: {product.Description}</p>
        </div>
    )
}

export default ItemDetail;









