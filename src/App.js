import "./App.scss";
import Card from "./Card/card";
import Navbar from "./componentes/navbar/navbar";
import ItemListContainer from "./containers/itemListContainer/itemListContainer";
import Item from "./Item/item";
import ItemList from "./itemList/itemList";





const App = () => {
    return(
    <>

        <Navbar/>
        <div>
            <ItemListContainer  greeting ="Listado De Productos"/>
            <ItemList />
        </div>

        
        
        
        



    </>
    )
}

export default App;