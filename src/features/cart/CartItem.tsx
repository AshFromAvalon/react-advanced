import React from 'react';

type CartItemsProps = {
   name: string;
   price: number;
   quantity: number;
};

const CartItem = ({ name, price, quantity }: CartItemsProps) => {
   const handleIncrementQuantity = () => {};
   const handleAddQuantity = () => {};

   return (
      <div className="flex justify-between gap-2 mb-2 border-b-[1px] border-b-slate-400 border-solid pb-2">
         <p>{name}</p>
         <p> {price}$</p>
         <div className="flex items-center justify-evenly gap-2">
            <button
               onClick={handleIncrementQuantity}
               className="h-6 w-6 rounded-full bg-yellow-500 text-black"
            >
               +
            </button>
            <p>qty: {quantity}</p>
            <button
               onClick={handleAddQuantity}
               className="h-6 w-6 rounded-full bg-yellow-500 text-black"
            >
               -
            </button>
         </div>
      </div>
   );
};

export default CartItem;
