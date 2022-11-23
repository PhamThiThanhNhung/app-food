import React from 'react';
import { OrderProduct } from '../../pages/home-page/home-page';

interface IButtonProps {
  icon?: React.ReactNode;
  name?: string;
  className?: string;
  setProductsOrder: React.Dispatch<React.SetStateAction<OrderProduct[]>>;
}

const Button: React.FC<IButtonProps> = ({
  icon,
  name,
  className,
  setProductsOrder,
}) => {
  return (
    <div
      onClick={() => {
        setProductsOrder([]);
        localStorage.setItem(
          'list-product-order',
          JSON.stringify({ data: [] })
        );
      }}
      className={`text-white ${className} cursor-pointer rounded-[20px] h-fit w-fit`}
    >
      {icon}
      <span className="">{name}</span>
    </div>
  );
};

export default Button;
