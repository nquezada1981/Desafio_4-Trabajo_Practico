import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import AppContext from '../../context/AppContext';
import "./Details.css"


const Detalle = () => {
    const [pizzaDetalle, setPizzaDetalle] = useState({});
    const { pizzas, addToCart } = useContext(AppContext);
    const { id } = useParams();

    const getDatos = () => {
        const datosPizza = pizzas.find((pizza) => pizza.id === id);
        setPizzaDetalle(datosPizza);
    };

    useEffect(() => {
        getDatos();
    }, [pizzas]);


    return (
        <>
            <NavBar />
            <div className="card-container">
                <div className="cards">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src={pizzaDetalle.img}
                            alt={pizzaDetalle.name}
                        />
                        <div className="card-body">
                            <h4 className="card-tittle">Pizza {pizzaDetalle.name}</h4>
                            <p>{pizzaDetalle.desc}</p>
                            <p className="card-text">
                                <b>Ingredientes:</b>
                            </p>
                            <ul style={{ listStyle: "none" }}>
                                {pizzaDetalle.ingredients?.map((ingredient, i) => (
                                    <li key={i}> {ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <h2 className="card-price">
                            Precio: $ {pizzaDetalle.price}
                        </h2>
                        <div className="buttons">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => addToCart(pizzaDetalle)}
                            >
                                Añadir
                            </button>
                            <Link to="/home">
                                <button type="button" className="btn btn-info">
                                    Volver
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalle;