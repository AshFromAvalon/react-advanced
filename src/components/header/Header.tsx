import { ShoppingCartSimple } from 'phosphor-react';

export const Header = () => {
   return (
      <header className="w-full bg-teal-600 h-[80px] text-white sticky top-0">
         <nav className="max-w-[1224px] m-auto flex justify-between items-center h-full">
            <div>Logo here</div>
            <div>
               <ShoppingCartSimple size={32} />
            </div>
         </nav>
      </header>
   );
};
