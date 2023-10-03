import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from '../Reducers/ShoppingReducer';

const store = configureStore({
    reducer: {
        shopping: shoppingReducer,
    },
});

export default store;
