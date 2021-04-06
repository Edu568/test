import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { navbar, logo, options } from "./Navbar.module.scss";
import { Link } from "react-router-dom";




const Navbar = () => {
    return (
        <nav className={navbar}>
            <Link to={`/`} className={logo}><h2>To Get</h2></Link>
            <nav>
                <ul className={options}>
                    <li className="nav-item">
                        <Link to={`/`}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/equipos`}>Equipos</Link>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;