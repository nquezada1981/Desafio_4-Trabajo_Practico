import { useContext } from "react";
import './PizzaCards.css'
import AppContext from "../context/AppContext";
import PriceFormat from "../PriceFormat/PriceFormat";
import { useNavigate } from "react-router-dom";

const PizzaCards = () => {

    const { pizzas, addToCart } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="card-container">
            {pizzas.map((pizza) =>
                <div key={pizza.id} className="cards">
                    <div className="card">
                        <img className="card-img-top" src={pizza.img} alt={pizza.name} />
                        <div className="card-body">
                            <h4 className="card-tittle">
                                Pizza {pizza.name}
                            </h4>
                            <p className="card-text">
                                <b>Ingredientes:</b>
                            </p>
                            <ul style={{ listStyle: 'none' }}>
                                {pizza.ingredients.map((ingredient, i) => (
                                    <li key={i}>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <h2 className="card-price">
                            $ {PriceFormat(pizza.price)}
                        </h2>
                        <div className="buttons">
                            <button type="button" className="btn btn-success"
                                to={`/pizza/${pizza.id}`}
                                onClick={() => navigate(`/pizza/${pizza.id}`)}
                            >
                                Ver mas</button>
                            <button type="button" className="btn btn-danger"
                                onClick={() => addToCart(pizza)}
                            >
                                Añadir</button>
                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}

export default PizzaCards