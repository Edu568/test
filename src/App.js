import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Container/Home/Index";
import { GlobalContext } from './Context/GlobalContext';
import { CartProvider } from "./Context/CartContext";
import ItemDetailContainer from "./itemDetail";
import Cart from "./Cart/Cart";
import CheckeOut from "./componentes/Checkout";
import ItemList from "./ItemList/ItemList";
import Item from "./Item/Item";









const App = () => {
    return(
        
        <GlobalContext.Provider>
        <BrowserRouter>
        <CartProvider>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path='/productos'>
                    <ItemListContainer greeting="Listado de productos" />
                </Route>

                <Route exact path='/productos/'>
                    <ItemList />
                </Route>
                <Route>
                    <Item />
                </Route>
                <Route exact path = '/Descripcion'>
                    <ItemDetailContainer />
                </Route>
                <Route exact path ="/Carrito">
                    <Cart />
                </Route>
                <Route exact path = "/checkout">
                    <CheckeOut />   
                </Route>
            </Switch>
                
            
        

        
        
        
        


        </CartProvider>
        </BrowserRouter>
        </GlobalContext.Provider>
        
        
    )
}

export default App;