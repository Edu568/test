import React, { useState } from 'react';



const ItemListContainer = (props) => {
    const [cart, setCart]= useState ([]);

    return (
        <>
            <a href="#" className="h1"> {props.greeting}</a>
            {cart}
            <button onClick={() => {setCart([...cart, {name:"equipo"}])}}>Agregar al carrito</button>    
        </>
    )
    
}

export default ItemListContainer;