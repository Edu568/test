import "./App.scss";
import Card from "./Card/card";
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

        <div>
            <Card marca="Samsung" modelo="s21" precio="$125000"  />
            <br/>
            <Card marca="Xioami" modelo="mi 11" precio="$115000"  />
            <br/>
            <Card marca="Apple" modelo="Iphone 12" precio="$125000"  />
            
        </div>
        
        
        



    </>
    )
}

export default App;