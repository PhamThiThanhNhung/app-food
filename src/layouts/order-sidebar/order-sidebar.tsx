import React from 'react';
import Button from '../../components/Button/index';
import EmptyOrder from './components/empty-order';
import ProductsOrder from './components/products-order';

const OrderSidebar: React.FC = () => {
  return (
    <div className="w-[389px] border-[5px] border-[#BB0707] rounded-[50px] flex flex-col px-[28px] py-[33px]">
      {/* <ProductsOrder /> */}
      <EmptyOrder />
      <div className="w-full border-[2px] border-[#BB0707] bg-[#BB0707]"></div>
      <div className="flex justify-between mt-[20px] w-full pb-[47px] text-[18px] font-bold">
        <p className=" text-[#938A8A] ml-[10px]">Sub Total:</p>
        <p className="text-[#BB0707] mr-[10px]">$ 0.0</p>
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-[#FFB100] rounded-[100px] py-[20px] px-[80px] "
          name="Purchase"
        />
      </div>
    </div>
  );
};

export default OrderSidebar;
//rafce
