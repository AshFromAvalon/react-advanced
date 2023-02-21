import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'core/interfaces/products';
import { RootState } from 'store';

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

export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
