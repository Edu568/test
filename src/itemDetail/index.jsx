const itemDetail = ({item}) => {
    const [contador, setcontador] = useState(1)
    const [stock, setstock] = useState(1)
    const [btnCompra, setbtnCompra] = useState("comprar")
    const [quantity, setquantity] = useState(0)

    const { addCart, product } = useContext(cartContext)

    const load = () => {
        setstock(item.stock)
    }
    const onAdd = () => {
        if (contador <stock) {
            setcontador(contador + 1)
        }
    }

    const onSub = () => {
        if (contador > 1) {
            setcontador(contador - 1)
        }
    }

    const buy = () => {
        debugger
        setstock(item.stock);
        setquantity(contador);
        setstock(stock - contador)
        setcontador(1)
        if (stock == contador){
            setbtnCompra("No hay stock")
        }

        addToCart ({item: item, cantidad: contador, price: item.price, name: item.name, id: item.id} });
        document.getElementById('terminarCompra').style.visibility = "visible";
    }

    return (
        <div key={item.id} product={item} onLoad={Load}>
        <h2>{item.name}</h2>
        <img src={item.foto}></img>
        <p>Descripcion: {item.descripcion}</p>
        <p>Precio: ${item.price}</p>
        <ItemCount contador={contador} onAdd={onAdd} onSub={onSub} onBuy={onBuy} btnCompra={btnCompra} stock={stock}/>
        <div id='terminarCompra'>
            <p>Se han agregado exitosamente {quantity} {item.name} al carrito</p>
            <Link to={`/cart`} quantity={quantity}><button className='confirmar'>Terminar compra</button></Link> 
        </div>
    </div>
    )
}

export default itemDetail
