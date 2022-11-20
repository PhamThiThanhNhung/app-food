import React from 'react';
import cart from '../../assets/images/cart.png';
import heart from '../../assets/images/heart.png';
import Button from '../Button';

interface props {
  image: any;
  name: string;
  price: number;
  deal?: number;
}

const Product: React.FC<props> = ({ image, name, price, deal }) => {
  return (
    <div className="group relative mx-[18px] w-[217px] shadow-lg shadow-gray-500 h-[288px] rounded-[30px] hover:cursor-pointer">
      {deal && deal > 0 ? (
        <div className="absolute flex justify-center items-center group-hover:hidden z-[10] top-0 left-0 h-[35px] w-[67px] bg-[#BB0707] rounded-tl-[20px] rounded-br-[20px]">
          <span className="text-[18px] font-bold text-white">{deal} %</span>
        </div>
      ) : null}

      <div className="relative h-[70%] group-hover:bg-yellow-300 rounded-tl-[30px] rounded-tr-[30px] group-hover:opacity-40">
        <img
          src={image}
          alt="chicken"
          className="w-full h-full object-cover rounded-tl-[30px] rounded-tr-[30px]"
        ></img>
      </div>

      <div className="absolute top-0 left-0 w-full h-[70%] z-[999] hidden group-hover:block">
        <div className="flex justify-around h-[100%] items-center">
          <img src={heart} className="max-w-[56.38px] object-contain" alt="" />
          <img src={cart} className="max-w-[56.38px] object-contain" alt="" />
        </div>
      </div>
      <div className="text-[24px] h-[30%] group-hover:bg-[#FFB100] rounded-b-[30px]">
        <p className="text-xl text-center text-[#BB0707] pt-4">{name}</p>
        <p className="text-center text-[#BB0707] opacity-50">{price} $</p>
      </div>
    </div>
  );
};

export default Product;
