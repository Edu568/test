import React, {useState, useContext } from 'react';
import itemCount from '../../ItemCount/itemCount';
import { globalContext } from '../Context/globalContext';

const itemListContainer = (props) => {
    const [contador, setContador] = useState(12)
    const [stock, setstock] = useState(12)
    const [productos, setproductos] = useState([])

    const {cart, setCart} = useContext(globalContext);

    const onAdd = (stock) => {
        setContador(contador + 1)
    }

    const onSubstract = () => {
        if (contadror > 1) {
            setContador(contador - 1)
        }else {
            console.log("NO HAY STOCK")
        }
    }
    return (
        <>
            <div>
                <itemCount cart={Cart} stock={setstock} cambiarStock={stock} contador={Contador} onSubstract={onSubstract} onAdd={onAdd} />

                <Link to={`/productos`}>
                    <b>Ir a productos</b>
                </Link>
                <button onClick={() => {
                    lolalStorage.setItem("carrito", JSON.stringify([...cart, [{ items: { id:1, name:"samsung"}, quantity:2}]]));
                }}>Agregar producto</button>
                
            </div>
        </>
    )
}

export default itemListContainer;
