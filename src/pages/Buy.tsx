import BuyForm from 'features/buy-form/BuyForm';
import BuyRecap from 'features/buy-recap/BuyRecap';
import React from 'react';

const Buy = () => {
   return (
      <div>
         <p className="text-2xl font-bold mb-8">Recap</p>
         <BuyRecap />
         <p className="text-2xl font-bold mt-8">Fill in the informations</p>
         <BuyForm />
      </div>
   );
};

export default Buy;
