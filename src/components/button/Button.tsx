import React, { ReactNode } from 'react';

interface ButtonProps {
   children: ReactNode;
   color: 'bg-teal-600' | 'bg-yellow-400';
}

const Button = ({ children, color }: ButtonProps) => {
   const textColor = color === 'bg-teal-600' ? 'text-white' : 'text-black';

   return (
      <button className={`py-1 px-2 rounded-md ${color} ${textColor} text-sm `}>{children}</button>
   );
};

export default Button;
