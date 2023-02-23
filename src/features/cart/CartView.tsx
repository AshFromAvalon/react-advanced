import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCartItems, selectTotalCartPrice } from 'store/slices/cartSlice';
import CartItem from './CartItem';
import Button from 'components/button/Button';
import { useNavigate } from 'react-router-dom';
import paths from 'core/routes/paths';

type CartViweProps = {
   closeCartView: () => void;
};

const CartView = ({ closeCartView }: CartViweProps) => {
   const items = useSelector(selectAllCartItems);
   const totalPrice = useSelector(selectTotalCartPrice);
   const navigate = useNavigate();

   const handleBuyClick = () => {
      navigate(paths.BUY);
      closeCartView();
   };

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
         <div className="flex gap-4">
            <p className="mt-8">Total price: {totalPrice}$</p>
            <Button color="bg-yellow-400" onClickFunc={handleBuyClick}>
               Buy
            </Button>
         </div>
      </div>
   );
};

export default CartView;
