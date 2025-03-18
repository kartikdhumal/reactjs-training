import { createSlice } from '@reduxjs/toolkit';

const storedCart = localStorage.getItem("cart");
const initialState = storedCart ? JSON.parse(storedCart) : [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const item = state.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            else {
                state.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeCart: (state, action) => {
            const updatedCart = state.filter((i) => i.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        },
        updateQuantity: (state, action) => {
            const item = state.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state));
        }
    }
});

export const { addCart, removeCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;