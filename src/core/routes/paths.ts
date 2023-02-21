type Paths = {
   [key: string]: string;
};

export default {
   HOME: '/',
   PRODUCT: '/product', //expect an ID as param
   NOT_FOUND: '*',
} as Paths;
