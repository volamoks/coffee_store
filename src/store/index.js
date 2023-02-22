import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import filter from '../components/coffeListItem/coffeeSlice';
import cart from '../components/cart/cartSlice';

const store = configureStore({
    reducer: { filter, cart, [apiSlice.reducerPath]: apiSlice.reducer },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
