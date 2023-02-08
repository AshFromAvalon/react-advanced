import React from 'react';

interface ButtonProps {
   label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
   return (
      <button
         onClick={() => {
            window.alert('OWAO! You clicked that good!!!');
         }}
      >
         {label}
      </button>
   );
};

export default Button;
