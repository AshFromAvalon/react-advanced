const getProducts = async () => {
   const response = await fetch('https://run.mocky.io/v3/a1af10cc-5bc2-4ec8-b88b-1cf172736885')
      .then((res) => res.json())
      .then((data) => {
         return {
            products: data.data,
            count: data.count,
         };
      });

   return response;
};

export { getProducts };
