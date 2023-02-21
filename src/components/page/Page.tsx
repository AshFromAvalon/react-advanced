import React from 'react';
import { Header } from 'components/header/Header';

interface PageProps {
   children: React.ReactNode | React.ReactNode[];
}

const Page: React.FC<PageProps> = ({ children }) => {
   return (
      <div className="font-Heebo m-auto">
         <Header />
         <main className="w-full max-w-[1224px] m-auto mt-8">{children}</main>
      </div>
   );
};

export default Page;
