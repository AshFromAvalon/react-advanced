import ProductCard from 'components/product-card/ProductCard';
import { Product } from 'core/interfaces/products';
import { useSelector } from 'react-redux';
import { selectProducts } from 'store/slices/productsSlice';

// type Props = {
//    products: Product[];
// };

function ProductList() {
   const products = useSelector(selectProducts);

   return (
      <ul className="grid grid-cols-4 gap-4">
         {!!products.length &&
            products.map((product: Product) => {
               return (
                  <ProductCard
                     key={product.id}
                     id={product.id}
                     imageUrl={product.imageUrl}
                     name={product.name}
                     price={product.price}
                     description={product.description}
                  />
               );
            })}
      </ul>
   );
}

export default ProductList;
