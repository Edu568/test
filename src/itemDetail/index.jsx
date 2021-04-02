import * as React from "react";
import {useState} from "react";



const ItemDetailContainer = ({item}) => {
    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(1)
    const [Compra, setCompra] = useState("Comprar")
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

        addCart ({item})
    }
 

    return (
        <div>
            
        </div>
    )
}

export default ItemDetailContainer;









