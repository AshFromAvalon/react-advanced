import { Language, Theme } from 'core/enum/app';
import { useTranslation } from 'react-i18next';
import useLanguage from 'hooks/useLanguage';
import { getProducts } from 'services/productsApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from 'store/slices/productsSlice';
import ProductList from 'features/product-list/ProductList';

const Home = () => {
   const [t] = useTranslation();
   const { setCurrentLanguage } = useLanguage();
   const dispatch = useDispatch();

   useEffect(() => {
      const fetchProduct = async () => {
         const response = await getProducts();

         setTimeout(() => {
            dispatch(setProducts(response));
         }, 1000);
      };

      fetchProduct();
   }, []);

   const setLanguageToEnglish = () => {
      setCurrentLanguage(Language.EN);
   };

   const setLanguageToFrench = () => {
      setCurrentLanguage(Language.FR);
   };

   // const generateProductList = () => {
   //    const prices = [5, 10, 15];
   //    return Array.from(Array(40).keys()).map((item, index) => {
   //       return {
   //          id: index,
   //          name: `Product #${index}`,
   //          price: prices[Math.floor(Math.random() * prices.length)],
   //          description: "I'm the only product you need",
   //          imageUrl: 'https://source.unsplash.com/random/300×300',
   //       };
   //    });
   // };

   // console.log(JSON.stringify(generateProductList()));

   return (
      <div>
         <ProductList />
      </div>
   );
};

export default Home;
