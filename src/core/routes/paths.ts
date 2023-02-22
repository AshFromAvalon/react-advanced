type Paths = {
   [key: string]: string;
};

export default {
   HOME: '/',
   PRODUCT: '/product', //expect an ID as param
   BUY: '/buy',
   NOT_FOUND: '*',
} as Paths;
