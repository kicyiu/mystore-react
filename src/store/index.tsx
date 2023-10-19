import { configureStore } from '@reduxjs/toolkit';
import cartItemReducer from './cartItem';

const store = configureStore({
    reducer: {
        cartItems: cartItemReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
