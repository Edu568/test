import { useParams } from "react-router"
import { useState, useEffect } from 'react';
import { getFirestore } from "../Firebase";
import ItemDetail from "../itemDetail";
import loader from "../mocks/images/cargando.gif";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [items, setItems] = useState([])
    const [itemsList, setItemsList] = useState([])

    useEffect(() => {
        const baseDeDatos = getFirestore();
        const itemCollection = baseDeDatos.collection("Items");
        const itemsDoc = itemCollection.doc(id)

        itemsDoc.get().then((doc) => {
            if(!doc.exists){
                console.log("No hay item")
                return;
            }
            setItems({id: doc.id, ...doc.data()});   
        }).catch((error) => {
            console.log('Error en Items')
        })
    }, []);
    if (items.lenght==0){
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
        return (
            <>
            <ItemDetail />
            </>
        )
    }
    
}

export default ItemDetailContainer;
