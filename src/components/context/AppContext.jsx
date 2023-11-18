import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const AppContext = createContext();

// Base de datos de provider
const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    const getPizzas = async () => {
        try {
            const response = await axios.get("/json/pizzas.json");
            const pizzas = response.data;
            setPizzas(pizzas);
        } catch (error) {
            console.log("Error al cargar los datos");
        }
    };

    useEffect(() => {
        getPizzas()
    }, []);


    const addToCart = ({ id, price, name, img }) => {
        const productoEcontradoIndex = cart.findIndex((p) => p.id === id);
        const producto = { id, price, name, img, count: 1 };

        if (productoEcontradoIndex >= 0) {
            cart[productoEcontradoIndex].count++;
            setCart([...cart]);
        } else {
            setCart([...cart, producto]);
        }
    };

    const incrementar = (i) => {
        cart[i].count++;
        setCart([...cart]);
    };

    const decrementar = (i) => {
        const { count } = cart[i];
        if (count === 1) {
            cart.splice(i, 1);
        } else {
            cart[i].count--;
        }
        setCart([...cart]);
    };

    return (
        <AppContext.Provider
            value={{ pizzas, cart, setCart, addToCart, incrementar, decrementar }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { PizzasProvider };

export default AppContext;
