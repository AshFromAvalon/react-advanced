import { ShoppingCartSimple } from 'phosphor-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalCartQuantity } from 'store/slices/cartSlice';
import CartView from './CartView';

export const Cart = () => {
   const total = useSelector(selectTotalCartQuantity);
   const [showCartView, setShowCartView] = useState(false);

   const toggleCartView = () => {
      setShowCartView((prev) => !prev);
   };

   return (
      <div className="relative ">
         {!!total && (
            <div
               id="cartNumber"
               className="rounded-full bg-white text-teal-500 h-6 w-6 flex justify-center items-center absolute left-[18px] bottom-[18px]"
            >
               {total}
            </div>
         )}
         <ShoppingCartSimple size={32} onClick={toggleCartView} className="cursor-pointer" />
         {showCartView && <CartView closeCartView={toggleCartView} />}
      </div>
   );
};
