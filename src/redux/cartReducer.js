import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // Used .find() instead of .filter() to locate the item — faster and avoids creating a new array unnecessarily.
        addToCart (state, action) {
            const existing = state.find(item => action.payload.id === item.id)
            if (existing) {
                existing.qty += 1;
            } else {
                state.push({ ...action.payload, qty: 1 });
            }
        },
        removeFromCart (state, action) {    
            const existing = state.find(item => item.id === action.payload.id);
            if (existing) {
                if (existing.qty > 1) {
                    existing.qty -= 1;
                } else {
                    return state.filter(item => item.id !== action.payload.id);
                }
            }   
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer