import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 ">
            <div className="text-center">
                <h2 className="display-1 fw-bold ">404</h2>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link to="/" className="btn btn-danger">Go Home</Link >
            </div>
        </div>
    )
}

export default NotFound