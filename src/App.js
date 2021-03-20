import "./App.scss";
import Navbar from "./componentes/navbar/navbar";
import ItemListContainer from "./containers/itemListContainer/itemListContainer";


const App = () => {
    return(
    <>

        <Navbar/>
        <ItemListContainer greeting ="Listado De Productos"/>



    </>
    )
}

export default App;