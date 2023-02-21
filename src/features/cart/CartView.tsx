import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCartItems } from 'store/slices/cartSlice';
import CartItem from './CartItem';

const CartView = () => {
   const items = useSelector(selectAllCartItems);

   return (
      <div className="bg-white absolute text-black right-0 p-4 w-[400px] shadow-md">
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
         {/* Afficher le prix Total via un selector */}
         <p className="mt-8">Total price: </p>
      </div>
   );
};

export default CartView;
