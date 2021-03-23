import {ShoppingCartOutlined} from '@ant-design/icons';

const itemCount = ({initial, stock, onAdd}) => {
    const [counter, setcounter] = useState(initial)
    const [purchase, setpurchase] = useState(false)

    const sumarProducto=() => {counter<stock && setcounter(counter+1)}
    const sumarProducto=() => {counter<stock && setcounter(counter-1)}

    const handlerOnAdd=() =>{
        onAdd(counter);
        setpurchase(true)
    }
    return (
        <div>
            <div className="mainStyle App">        
                <p className="counterTitle">Elegir cantidad:</p>                
                <div className="counter">                    
                    <Tooltip title={counter>initial ? "Quitar producto":null}>
                        <Button type="primary" 
                                shape="circle" 
                                onClick={quitarProducto} 
                                className="itemStyle" 
                                style={counter===initial ? {background:"#e4e4e4", border:"#bbbbbb", color:"#bbbbbb"}:{}}
                                >-
                        </Button>
                    </Tooltip>

                    <p className="numberStyle">{counter}</p>   

                    <Tooltip title={counter===stock ? "No hay más unidades disponibles" : "Agregar producto al carrito"}>
                        <Button type="primary" 
                                shape="circle" 
                                onClick={sumarProducto} 
                                className="itemStyle" 
                                style={counter===stock ? {background:"#e4e4e4", border:"#bbbbbb", color:"#bbbbbb"}:{}}>+
                        </Button>
                    </Tooltip>
                </div>
                <p className="avUnits">{stock} Unidades disponibles</p>
                {purchase === false?<Button type="primary" className="mainButton" onClick={handlerOnAdd}>+ Agregar al carrito</Button> :
                                    <Link to="/Cart">
                                        <Button type="primary" className="goCart" ><ShoppingCartOutlined />Ir al carrito</Button>
                                    </Link>                                   
                                    }                                     
            </div>
        </div>
    )
}

export default itemCount
