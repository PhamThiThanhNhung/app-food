import React from 'react'
import Button from '../Button/index'
import chicken from "../../assets/images/chicken.png"
import trash from "../../assets/images/trash.svg"

const Total: React.FC = () => {
  return (
    <div className="w-[389px] border-[5px] border-[#BB0707] rounded-[50px] flex flex-col px-[28px] py-[33px]">
      <div>
        <ul>
          <li className=" flex justify-between text-[#BB0707]  font-bold">
            <p className="ms:w-[50%] w-[50%]">Product</p>
            <p className="ms:w-[30%] w-[30%] flex justify-center items-center">Amount</p>
            <p className="ms:w-[20%] w-[20%] flex justify-end">Price</p>
          </li>

          <li className="w-[100%] h-[46px] flex lg:text-[15px] text-[15px] text-[#BB0707] mb-[36px]">
            <div className="flex justify-start items-center ms:w-[50%] w-[50%] ">
              <img
                src={chicken}
                alt="chicken"
                className="lg:w-[49px] lg:max-w-[49px] w-[40px] max-w-[40px]  h-full max-h-[46px]"
              />
              <p>Fried Chicken</p>
            </div>
            <div className="ms:w-[30%] w-[30%] flex justify-center items-center">
              <span>1</span>
            </div>
            <div className="ms:w-[20%] w-[20%] flex justify-end items-center mr-[2px]">
              <span>1.2 $</span>
            </div>
          </li>

          <li className="w-[100%] h-[46px] flex lg:text-[15px] text-[15px] text-[#BB0707] mb-[36px]">
            <div className="flex justify-start items-center ms:w-[50%] w-[50%] ">
              <img
                src={chicken}
                alt="chicken"
                className="lg:w-[49px] lg:max-w-[49px] w-[40px] max-w-[40px]  h-full max-h-[46px]"
              />
              <p>Fried Chicken</p>
            </div>
            <div className="ms:w-[30%] w-[30%] flex justify-center items-center">
              <span>1</span>
            </div>
            <div className="ms:w-[20%] w-[20%] flex justify-end items-center mr-[2px]">
              <span>1.2 $</span>
            </div>
          </li>

          <li className="w-[100%] h-[46px] flex lg:text-[15px] text-[15px] text-[#BB0707] mb-[16px]">
            <div className="flex justify-start items-center ms:w-[50%] w-[50%] ">
              <img
                src={chicken}
                alt="chicken"
                className="lg:w-[49px] lg:max-w-[49px] w-[40px] max-w-[40px]  h-full max-h-[46px]"
              />
              <p>Fried Chicken</p>
            </div>
            <div className="ms:w-[30%] w-[30%] flex justify-center items-center">
              <span>1</span>
            </div>
            <div className="ms:w-[20%] w-[20%] flex justify-end items-center mr-[2px]">
              <span>1.2 $</span>
            </div>
          </li>
        </ul>
      </div>
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
  )
}

export default Total;
//rafce