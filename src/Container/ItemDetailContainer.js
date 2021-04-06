import * as React from "react";
import { useParams } from "react-router"
import { useState, useEffect } from 'react';
import { getFirestore } from "../firebase";
import ItemDetail from "../itemDetail";
import loader from "../mocks/images/cargando.gif";


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState([])

    

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
            console.log('Error en Items', error)
        })
        
    }, [id]);
    debugger
    if (items.lenght==0){
        debugger
        return (
            setTimeout(() => {
                <>
                    <h3>No se encontro el producto</h3>
                </>
            }, 200),
            <>
            <img className="cargando" src={loader} alt="cargando" />
            </>
        );
    } else {
        debugger
        return (
            
            <>
            <ItemDetail items={items} />
            </>
        )
    }
    
}

export default ItemDetailContainer;
