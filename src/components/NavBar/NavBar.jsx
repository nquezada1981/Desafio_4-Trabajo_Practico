import { Link } from "react-router-dom";
import PriceFormat from "../PriceFormat/PriceFormat";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import './NavBar.css';

const NavBar = () => {


    const { cart } = useContext(AppContext);
    const total = cart.reduce(
        (valorAnterior, { count, price }) => valorAnterior + price * count,
        0
    );

    return (
        <div className="navbar">
            <div className="brand-container">
                <Link to="/home" className="logo-link">
                    <h4 className="brand-logo">
                        <span className="logo-pizza">🍕</span>Pizzería Mamma Mia!
                    </h4>
                </Link>
            </div>

            <div className="total-container">
                <Link to="/cart" className="cart-link">
                    <h4 className="total-logo">
                        <span className="logo-cart">🛒</span>Total: ${PriceFormat(total)}
                    </h4>
                </Link>
            </div>
        </div>
    )
}

export default NavBar