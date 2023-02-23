import Button from 'components/button/Button';
import { Product } from 'core/interfaces/products';
import paths from 'core/routes/paths';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToCart } from 'store/slices/cartSlice';

type ProductCardProps = Product;

const ProductCard = ({ id, name, price, description, imageUrl }: ProductCardProps) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const navigateToProduct = () => {
      navigate(`${paths.PRODUCT}/${id}`);
   };

   const handlAddToCart = () => {
      dispatch(addToCart({ product: { id, name, price, description, imageUrl }, quantity: 1 }));
   };

   return (
      <div className="text-sm p-4 shadow-md product-card">
         <div className="flex mb-2 ">
            <img className="mr-4 h-[100px] w-[100px]" src={imageUrl} />
            <div className="flex flex-1 flex-col justify-between">
               <div>
                  <p
                     onClick={navigateToProduct}
                     className="mb-2 hover:underline cursor-pointer font-bold"
                  >
                     {name}
                  </p>
                  <p>Price: {price}$</p>
               </div>
               <div className="flex mt-2">
                  <Button onClickFunc={handlAddToCart} color="bg-yellow-400">
                     Add to cart
                  </Button>
               </div>
            </div>
         </div>
         <p className="font-bold">description:</p>
         <p>{description}</p>
      </div>
   );
};

export default ProductCard;
