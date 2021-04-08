import * as React from "react";
import {useState, useContext, useEffect} from "react";
import ItemCount from "../ItemCount/itemCount";
import {Link, useParams} from "react-router-dom";
import {  CartContext } from "../Context/CartContext/index";
import { getFirestore } from "../Firebase";




const ItemDetail = ({items}) => {
    

    const {id} = useParams();
    const [item, setItems] = useState()
    
    useEffect(() => {
        
        const baseDeDatos = getFirestore();
        const itemsCollection = baseDeDatos.collection("Items");
        const itemsDoc = itemsCollection.doc(id)

        itemsDoc.get().then((doc) => {

            if(!doc.exists){
                console.log("No hay item")
                return;
            }
            setItems({id: doc.id, ...doc.data()});
            console.log("los items son"+items)
        }).catch((error) => {
            console.log('Error en Items' + error)
        })
        
    }, [id]);

    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(items.Stock)
    const [compra, setCompra] = useState("Comprar")
    const [quantity, setQuantity] = useState(0)

    const { addCart , product} = useContext(CartContext);
    
    
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
        //document.getElementById('Finalizar Compra').style.visibility = "visible";
    }
    console.log([product])

    return (
        <>
            <div key={items.id} product={items}  className="d-flex flex-column justify-content-around itemDetail">
                <h2>{items.Title}</h2>
                <div className="d-flex flex-row justify-content-between">
                    <img src={items.Image} alt="imagen"></img>
                    <div className="d-flex flex-column justify-content-between">

                        <p> Precio:${items.Price}</p>
                        <ItemCount contador={contador} onAdd={onAdd} onSubstract={onSubstract} onBuy={onBuy} compra={compra} stock={stock}/>
                        <div id="Terminar Compra" className="d-flex flex-column justify-items-center confirmaCompra">
                            <p>Se agrego {quantity} {items.Title}al carrito</p>
                            <Link to={`/cart`} quantity={quantity}><button>Finalizar Compra</button></Link>
                        </div>
                    </div>
                </div>
                <p>Descripcion: {product.Description}</p>
            </div>
        </>
    )
}

export default ItemDetail;









