import { Switch } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import "./App.scss";
import Navbar from "./componentes/navbar/navbar";
import ItemListContainer from "./containers/itemListContainer/itemListContainer";
import ItemList from "./itemList/itemList";





const App = () => {
    return(
    <>

        <Navbar/>
        <div>
            <ItemListContainer  greeting ="Listado De Productos"/>
            <ItemList />
        </div>
        <Switch>
            <Route exatc path='/'>
                <inicio />
            </Route>
            <Route exact  path='/productos'>
                <ItemListContainer />
            </Route>
        </Switch>

        
        
        
        



    </>
    )
}

export default App;