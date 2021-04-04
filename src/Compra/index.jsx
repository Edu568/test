import { CartContext } from "../Context/CartContext"
import itemList from "../ItemList/ItemList";

const Compra = ({ servicios }) => {
    const {pTotal, product, qcart} = useContext(CartContext)
    const [cartProds, setCartProds] = useState([])

    useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(product)
            }, 200);
        });
         myPromise.them((result) => setCartProds(result));
    }, []);
    return (
        <div className="producList">
            <ItemList />
        </div>
    )
}

export default Compra;
