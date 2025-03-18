import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

/**
 * 
 * @returns Navigation Bar
 */

function Navbar() {
    const cartLength = useSelector((state) => state.cart.length);

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Kartik Dhumal</h1>
            <Link to={'/cartpage'} className="cart-contain">
                <FaShoppingCart className="cart-icon" />
                {cartLength > 0 && <span className="cart-count">{cartLength}</span>}
            </Link>
        </nav>
    );
}

export default Navbar;
