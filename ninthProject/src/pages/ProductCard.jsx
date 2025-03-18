import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/cartSlice";
import "../styles/ProductCard.scss";

/**
 * 
 * @param {product} - Product obj with product data
 * @returns Product Card
 */

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    function handleAddCart() {
        let existing = cartItems.some((item) => item.id === product.id);
        if (existing) {
            alert("Product already exists in cart");
        }
        else {
            dispatch(addCart(product));
        }
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">₹{product.price}</p>
                <button
                    onClick={handleAddCart}
                    className="add-to-cart-btn"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
