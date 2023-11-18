
import Header from "../../Header/Header";
import NavBar from "../../NavBar/NavBar";
import PizzaCards from "../../PizzaCards/PizzaCards";


const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className="card-container">
                <PizzaCards />
            </div>
        </div>
    )
}

export default Home