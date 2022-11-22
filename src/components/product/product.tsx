import { DocumentData } from 'firebase/firestore';
import React from 'react';
import cart from '../../assets/images/cart.png';
import heart from '../../assets/images/heart.png';
import { ProductType } from '../../interface';
import Button from '../Button';

interface props {
  product: ProductType | DocumentData;
  onClick?: any;
}

const Product: React.FC<props> = ({ product, onClick }) => {
  return (
    <div className="group relative mx-[18px] w-[217px] shadow-lg shadow-gray-500 h-[288px] rounded-[30px] hover:cursor-pointer">
      {product?.deal && product?.deal > 0 ? (
        <div className="absolute flex justify-center items-center group-hover:hidden z-[10] top-0 left-0 h-[35px] w-[67px] bg-[#BB0707] rounded-tl-[20px] rounded-br-[20px]">
          <span className="text-[18px] font-bold text-white">
            {product?.deal} %
          </span>
        </div>
      ) : null}

      <div className="relative h-[70%] group-hover:bg-yellow-300 rounded-tl-[30px] rounded-tr-[30px] group-hover:opacity-40">
        <img
          src={product.image.url}
          alt="chicken"
          className="w-full h-full object-cover rounded-tl-[30px] rounded-tr-[30px]"
        ></img>
      </div>

      <div className="absolute top-0 left-0 w-full h-[70%] z-[999] hidden group-hover:block">
        <div className="flex justify-around h-[100%] items-center">
          <img src={heart} className="max-w-[56.38px] object-contain" alt="" />
          <img
            src={cart}
            onClick={onClick}
            className="max-w-[56.38px] object-contain"
            alt=""
          />
        </div>
      </div>
      <div className="text-[24px] h-[30%] group-hover:bg-[#FFB100] rounded-b-[30px]">
        <p className="text-xl text-center text-[#BB0707] pt-4">
          {product.name}
        </p>
        <p className="text-center text-[#BB0707] opacity-50">
          {product.price} $
        </p>
      </div>
    </div>
  );
};

export default Product;
