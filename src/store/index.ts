import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'store/slices/appSlice';
import productsReducer from './slices/productsSlice';

const store = configureStore({
   reducer: {
      app: appReducer,
      products: productsReducer,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
