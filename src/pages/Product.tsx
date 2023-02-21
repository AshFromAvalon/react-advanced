import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from 'store';
import { selectProductById } from 'store/slices/productsSlice';

const Product = () => {
   let { id } = useParams();
   const product = useSelector((state: RootState) => selectProductById(state, 1));
   console.log(product);

   return <div>Product</div>;
};

export default Product;
