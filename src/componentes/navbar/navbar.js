import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { navbar, logo, options } from "./Navbar.module.scss";




const Navbar = () => {
    return (
        <nav className={navbar}>
            <div className={logo}>To Get</div>
            <nav>
                <ul className={options}>
                    <li className="nav-item">
                        <a href="/#">Inicio</a></li>
                    <li className="nav-item">
                        <a href="/#">Equipos</a></li>
                    <li className="nav-item">
                        <a href="/#">Ingresa</a></li>
                    <li className="nav-item">
                        <a href="/#">Registrate</a></li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;