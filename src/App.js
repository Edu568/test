import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";







const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                </Route>
                <Route>
                    <ItemListContainer greeting="Listado de productos" />
                </Route>
            </Switch>
                
            
        

        
        
        
        



        </BrowserRouter>
    )
}

export default App;