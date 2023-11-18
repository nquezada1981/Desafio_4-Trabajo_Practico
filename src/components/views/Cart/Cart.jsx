import { useContext } from 'react';
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import AppContext from "../../context/AppContext";
import PriceFormat from '../../PriceFormat';
import "./Cart.css"


const Cart = () => {
    const { cart, incrementar, decrementar } = useContext(AppContext);
    const total = cart.reduce((a, { count, price }) => a + price * count, 0);

    return (
        <>
            <NavBar />
            <div className="cart-container">
                <div className="cart">
                    <h4>Detalles del pedido:</h4>
                    <div className="cart-list">
                        {cart.map((item, i) => (
                            <div key={i} className="detalles">
                                <div className="producto">
                                    <img src={item.img} className="cart-img" alt={item.name} />
                                    <h6>{item.name}</h6>
                                </div>
                                <div className="contadores">
                                    <h6>$ {PriceFormat(item.price * item.count)}</h6>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-custom"
                                        onClick={() => decrementar(i)}
                                    >
                                        -
                                    </button>
                                    <b>{item.count}</b>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-custom"
                                        onClick={() => incrementar(i)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className="line" />
                    <div className="totales">
                        <h2>Total: ${PriceFormat(total)}</h2>

                        <button type="button" className="btn btn-success btn-custom">
                            Ir a Pagar
                        </button>
                        <Link to="/home">
                            <button type="button" className="btn btn-warning">
                                Agregar otra pizza
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart