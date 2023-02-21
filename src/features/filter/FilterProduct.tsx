import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const FilterProduct = () => {
   const [filterValue, setFilterValue] = useState(5);
   const dispatch = useDispatch();

   return <div></div>;
};

export default FilterProduct;
