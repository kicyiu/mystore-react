import { createSlice } from '@reduxjs/toolkit';

const initialCartItemsState = { itemsList: [], totalPrice: 0 };

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: initialCartItemsState,
    reducers: {
        addCartItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsList.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1
                });
            } else {
                existingItem.quantity++;
            }
            state.totalPrice += parseFloat(newItem.price);
        }
    }
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;

