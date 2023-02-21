import React, { ReactNode } from 'react';

interface ButtonProps {
   children: ReactNode;
   color: 'bg-teal-600' | 'bg-yellow-400';
   onClickFunc: () => void;
}

const Button = ({ children, color, onClickFunc }: ButtonProps) => {
   const textColor = color === 'bg-teal-600' ? 'text-white' : 'text-black';

   return (
      <button
         onClick={onClickFunc}
         className={`py-1 px-2 rounded-md ${color} ${textColor} text-sm `}
      >
         {children}
      </button>
   );
};

export default Button;
