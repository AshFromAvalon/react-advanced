import CartItem from 'features/cart/CartItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCartItems, selectTotalCartPrice } from 'store/slices/cartSlice';

const BuyRecap = () => {
   const items = useSelector(selectAllCartItems);
   const totalPrice = useSelector(selectTotalCartPrice);

   return (
      <div>
         {!!items.length &&
            items.map((item) => {
               return (
                  <CartItem
                     name={item.product.name}
                     price={item.product.price}
                     quantity={item.quantity}
                  />
               );
            })}
         <p>Total: {totalPrice}$</p>
      </div>
   );
};

export default BuyRecap;
