import * as React from "react";
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { getFirestore } from "../Firebase";
import ItemDetail from "../itemDetail";
import loader from "../mocks/images/cargando.gif";


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState(null)

    

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
    
   return (
       <>
            {!items? (
                setTimeout(() => {
                    <>
                        <h3>No se encontro producto</h3>
                    </>
                },200),
                <>
                    <img className="cargando" src={loader} alt="cargando" />
                </>
            ): (
                <>
                    <ItemDetail items={items || {}} />
                </>
            )}
        </>
    )
        
        
   
    
    
}

export default ItemDetailContainer;
