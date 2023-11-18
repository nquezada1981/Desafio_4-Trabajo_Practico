import Card from "../../Card/Card"
import Header from "../../Header/Header"
import NavBar from "../../NavBar/NavBar"


const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className="card-container">
                <Card />
            </div>

        </div>
    )
}

export default Home