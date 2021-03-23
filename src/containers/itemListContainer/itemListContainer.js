import React, { useEffect, useState } from 'react';
import ItemList from '../../itemList/itemList';
import ProductList from "../../mocks/productList";
import { itemCount } from '../../itemCount/itemCount';



const ItemListContainer = ({greeting}) => {
    const  [products, setproducts] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [contador, setcontador] = useState(10)
    const [stock, setstock] = useState(10)
    
    useEffect(() => {
        setisLoading(true)
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(ProductList), 1000);
        });
        myPromise.then((result) => {
        setproducts(result);
        setisLoading(false);
        });
    },[]);
    
   const onAdd = (stock) => {
       setcontador(contador +1)
   };

   const onSubstract = () => {
       if(contador > 1) {
           setcontador(contador -1);
       } else {console.log("No hay stock")}
   }
   return (
       <>
            {array.map((element, index) => {
                return (<div>
                    <h2>{element}</h2>
                </div>)
            })}
            <ItemCount stock={stock} cambiarStock={setStock} contador={contador}
                onSubstract={onSubstract} onAdd={onAdd} />
            <Link to={`/contacto`}>
                <b>Ir a la pagina de contacto</b>
            </Link>
            <button onClick={() => {
                localStorage.setItem("carrito", JSON.stringify([...cart, [{ items: { [] }, quantity: 2 }]]));
            }}>agregar un producto</button>
        </>
   )

    if (isLoading){
        return <h1>Cargando Productos...</h1>
    }

        
        
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );



    

    

};

export default ItemListContainer;
    