import { createDraftSafeSelector, createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'core/interfaces/products';
import { RootState } from 'store';
import { getProducts } from 'services/productsApi';

interface ProductSlice {
   products: Product[];
   count: number;
}

const initialState = {
   products: [],
   count: 0,
} as ProductSlice;

const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts: (state, action: PayloadAction<ProductSlice>) => {
         const { products, count } = action.payload;
         state.products = products;
         state.count = count;
      },
      filterProducts: (state, action: PayloadAction<number>) => {
         state.products.filter((product) => product.price === action.payload);
      },
   },
});

export const { filterProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;

const products = (state: RootState) => state.products.products;
const id = (state: RootState, id = 0) => id;

export const selectProducts = products;
export const selectProductById = createSelector([products, id], (products, id) => products[id]);
