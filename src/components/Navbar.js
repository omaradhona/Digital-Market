import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar(props){
    return (
        <nav className="navbar d-flex align-items-center navbar-expand-sm custom-bg">
            <div className="container-fluid align-items-stretch align-self-center custom-bg">
                <Link to="/pages/Home" className="site-title">
                    <span>Digital</span> Market
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-self-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex align-self-center">
                        <Link to="/pages/Home" className="link">Home</Link>
                        <Link to="/pages/Shop" className="link" onClick={() => props.setIndex(0)}>
                            Shop
                        </Link>
                        <Link onClick={props.toggleCart}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="cart-items-count"
                                style={{
                                    opacity: props.itemsCount > 0 ? "1" : "0",
                                    transition: "0.3s",
                                }}>
                                {props.itemsCount}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}