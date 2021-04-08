import { CartContext } from "../Context/CartContext";
import { useState } from 'react';
import { useContext } from 'react';
import { getFirestore } from "../Firebase";

const CheckOut = (Cproduct) => {
    const {pTotal, product, qcart, eliminarProducto} = useContext(CartContext)
    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState([])
    const [email, setEmail] = useState([]);
    const [apellido, setApellido] = useState([])
    const [conEmail, setConEmail] = useState([]);
    const [telefono, setTelefono] = useState([]);
    const [order, setOrder] = useState([]);
    const finalizarCompra = () => {
        if(email === conEmail) {
            let newOrder = {comprador: {name: nombre, email: email, telefono: telefono}, items: [...product], total: [pTotal()]};
            const baseDeDatos = getFirestore();
            const ordenesCollection = baseDeDatos.collection("ordenes");
            ordenesCollection.add(newOrder).then((value) => {
                setOrder(value.id);
            })
            document.getElementById("orderConfirm").style.visibility ="visible"
            document.getElementById("dataCustomer").style.visibility ="hidden"
            document.getElementById("erroremail").style.visibility ="hidden"
        }
       
    }
    return (
        <div>
            <div id="dataCustomer">
            <h2>Datos del comprador</h2>
            <div id='confirmarCompra' className='d-flex flex-column align-items-center'>
            <form className='d-flex flex-column align-items-center' action="">
                <input type="text" placeholder="Nombre" required className='datoContacto' onBlur={(e) => {setNombre(e.target.value)}}/>
                <input type="text" placeholder="Apellido" required className='datoContacto' onBlur={(e) => {setApellido(e.target.value)}}/>
                <input type="text" placeholder="Teléfono" required className='datoContacto' onBlur={(e) => {setTelefono(e.target.value)}}/>
                <input type="email" placeholder="Correo Electrónico" required className='datoContacto' onBlur={(e) => {setEmail(e.target.value)}}/>
                <input type="email" placeholder="Confirme su correo Electrónico" required className='datoContacto' onBlur={(e) => {setConEmail(e.target.value)}}/>
                <p id="errormail">Los correos no coinciden</p>
                <button onClick={() =>{finalizarCompra()}} >Terminar Pedido</button>
            </form>
            </div>
         </div>
         <div id="orderConfirm">
            <h2 >¡Muchas Gracias por su compra, {nombre}!</h2>
            <h3>Estará recibiendo un email de confirmación en {email}</h3>
            <h4>Su número de orden es: {order}</h4>


         </div>
            
        </div>
    )
}

export default CheckOut;
