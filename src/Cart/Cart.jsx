import { Link } from "react-router-dom"
import ProductosCarrito from "./ProductosCarrito"

const Cart = (CartProduct) => {
    const {productTotal,Product,qCart}= useContext(CartContex)
    const [loading, setLoading] = uLeState(true)
    const [nombre, setNombre] = useState([])
    const [apellido, setApellido] = useState([])
    const [email, setEmail] = useState([])
    const [telefono, setTelefono] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    const CartItems = () => {
        if(qCart() >= 1){
            return
                <div>
                    <h2>Su compra</h2>
                    <ProductosCarrito />
                    <h3>Precio total: ${pTotal()}</h3>
                    <Link to ={`/checkout`}><button>Confirmar Compra</button></Link>

                </div>
        } else {
            return
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to={`/productos`}><h3>Volver a productos</h3></Link>
            </>
        }
    }
    return (
        <>
        {loading ? <div><h2>Cargando productos seleccionados....</h2><img className="" src={loader}/></div> : <><CartItems /></>}
        </>
    )
}

export default Cart;
