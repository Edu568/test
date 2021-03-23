import React, { useEffect, useState } from 'react';
import ItemList from '../../itemList/itemList';
import ProductList from "../../mocks/productList";



const ItemListContainer = ({greeting}) => {
    const  [products, setproducts] = useState([]);


useEffect(() => {
    const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(ProductList), 3000);
        });
        myPromise.then((result) => setproducts(result));
        }, []);
        
        
        return (
            <div>
                <h2>{greeting}</h2>
                <ItemList products={products} />
            </div>
        );



    

    

};

export default ItemListContainer;
    