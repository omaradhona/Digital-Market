import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar(props){
    return (
        <nav className="navbar d-flex align-items-center navbar-expand-sm bg-danger">
            <div className="container-fluid align-items-stretch align-self-center">
                <Link to="/pages/Home" className="site-title fw-bold">E-commerce</Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-self-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex align-self-center">
                        <Link to="/pages/Home" className="me-4 link">Home</Link>
                        <Link to="/pages/Shop" className="me-4 link">Shop</Link>
                        <Link onClick={props.toggleCart}>
                            <i className="fa-solid fa-cart-shopping">
                                
                            </i>
                            <span className="cart-items-count">{props.itemsCount}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
    
}