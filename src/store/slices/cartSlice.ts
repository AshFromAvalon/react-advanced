import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from 'core/interfaces/cart';
import { RootState } from 'store';

interface CartSlice {
   cartItems: CartItem[];
}

const initialState = {
   cartItems: [],
} as CartSlice;

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<CartItem>) => {
         const productExist = state.cartItems.find(
            (cartItem) => cartItem.product.id === action.payload.product.id,
         );

         if (productExist) {
            productExist.quantity = productExist.quantity + 1;
         } else {
            state.cartItems.push(action.payload);
         }
      },
   },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

const items = (state: RootState) => state.cart.cartItems;

export const selectAllCartItems = items;

export const selectTotalCartQuantity = createSelector([items], (items) =>
   items.reduce((a, b) => {
      return a + b.quantity;
   }, 0),
);
