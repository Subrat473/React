import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) =>{
            // Redux Toolkit uses inner BTS
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        // originalState = ["pizza"]
        clearCart: (state, action) => {
            console.log(state); // [pizza]
            state = [];
            console.log(state); // []
            
            
        },

    },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;