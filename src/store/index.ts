import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'store/slices/appSlice';
import productsReducer from 'store/slices/productsSlice';
import cartReducer from 'store/slices/cartSlice';

const store = configureStore({
   reducer: {
      app: appReducer,
      products: productsReducer,
      cart: cartReducer,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
