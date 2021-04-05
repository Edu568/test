import * as React from "react";
import {useState, useContext} from "react";
import ItemCount from "../ItemCount/itemCount";
import {Link} from "react-router-dom";
import {  CartContext } from "../Context/CartContext/index";



const ItemDetailContainer = ({item}) => {
    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(1)
    const [compra, setCompra] = useState("Comprar")
    const [quantity, setQuantity] = useState(0)

    const { addCart , product} = useContext(CartContext)
    
    const Load = () => {
        setStock(item.stock)
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
        debugger
        setStock(item.stock);
        setQuantity(contador);
        setStock(stock - contador);
        setContador(1);
        if(stock == contador){
            setCompra("No hay stock")
        }

        addCart ({item: item, cantidad: contador, price: item.price, name: item.name, id: item.id});
        document.getElementById('Finalizar Compra').style.visibility = "visible";
    }
    console.log([product])

    return (
        <div key={item.id} product={item} onLoad={Load} className="d-flex flex-column justify-content-around itemDetail">
            <h2>{item.name}</h2>
            <div className="d-flex flex-row justify-content-between">
                <img src={item.foto}></img>
                <div className="d-flex flex-column justify-content-between">

                    <p> Precio:${item.price}</p>
                    <ItemCount contador={contador} onAdd={onAdd} onSubstract={onSubstract} onBuy={onBuy} compra={compra} stock={stock}/>
                    <div id="Terminar Compra" className="d-flex flex-column justify-items-center confirmaCompra">
                        <p>Se agrego {quantity} {item.name}al carrito</p>
                        <Link to={`/cart`} quantity={quantity}><button>Finalizar Compra</button></Link>
                    </div>
                </div>
            </div>
            <p>Descripcion: {item.descripcion}</p>
        </div>
    )
}

export default ItemDetailContainer;









