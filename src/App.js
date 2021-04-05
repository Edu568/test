import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Container/Home/Index";
import { GlobalContext } from './Context/GlobalContext';
import { CartProvider } from "./Context/CartContext";
import ItemDetailContainer from "./itemDetail";
import Cart from "./Cart/Cart";
import CheckOut from "./CheckOut";











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
                <Route exact path='/productos/:id'>
                    <ItemDetailContainer />
                </Route>
                <Route exact path = "/cart">
                    <Cart />
                </Route>
                <Route exact path="/checkout">
                    <CheckOut />
                </Route>
            </Switch>
                
            
        

        
        
        
        


        </CartProvider>
        </BrowserRouter>
        </GlobalContext.Provider>
        
        
    )
}

export default App;