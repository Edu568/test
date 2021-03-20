import React, { useEffect, useState } from 'react';



const ItemListContainer = (props) => {
    const [cart, setCart]= useState ([]);

    useEffect (() => {
        console.log("se monta el componente")
        
        return () => {
            console.log("se murio")
        }

    }, [])

    console.log("se esta por renderizar");
    

    return (
        <>
            <a href="#" className="h1"> {props.greeting}</a>
            {cart}
            <button onClick={() => {setCart([...cart, {name:"equipo"}])}}>Agregar al carrito</button>    
        </>
    )
    
}

export default ItemListContainer;