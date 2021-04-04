import * as React from "react";
import {useState, useEffect} from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import ItemList from "../../ItemList/ItemList";
import productList from "../../mocks/productList";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);   
    const [isLoading, setisLoading] = useState(false);  

    useEffect(() => {
        setisLoading(true)
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 3000)
        })
        myPromise.then((result) => {
        setProducts(result)
        setisLoading(false);
        });
    }, []);

    if(isLoading){
        return <h1>Cargando Productos</h1>
    }
    return (
        <div>
            <section className="greeting">
                <h2>
                    {greeting}
                </h2>
            </section>
            <div className="container">
                <ItemList products={products} />
            </div>
        </div>
        
        
    )
}

export default ItemListContainer
