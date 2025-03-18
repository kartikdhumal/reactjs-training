import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeCart } from "../redux/cartSlice";
import "../styles/art.scss";
import { FaNapster } from "react-icons/fa";


/**
 * 
 * @returns Cart page with products info
 */
const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);
    const dispatch = useDispatch();

    function finalPrice() {
        let total = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        return total;
    }

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart 🛒</h2>

            {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty 😔</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-image" />
                            <div className="cart-details">
                                <h3>{item.name}</h3>
                                <p className="price">₹{item.price}</p>
                                <div className="quantity-control">
                                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
                                        ➕
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => {
                                        if (item.quantity > 1) {
                                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                                        }
                                    }}>
                                        ➖
                                    </button>
                                </div>
                                <p
                                    className="removetext"
                                    onClick={() => dispatch(removeCart({ id: item.id }))}
                                >
                                    Delete
                                </p>
                                <span>
                                    Total : ₹ {item.price * item.quantity}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <p className="cart-items">
                {
                    cartItems.length > 0 && "Final Price : ₹" + finalPrice()
                }
            </p>
        </div>
    );
};

export default Cart;
