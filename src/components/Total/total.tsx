import React from 'react'
import {ImSad} from 'react-icons/im'
import Button from '../Button/index'

const Total = () => {
  return (
    <div className="w-[389px] border-[5px] border-[#BB0707] rounded-[50px] flex justify-start flex-col items-center px-[28px] py-[42px] p-[30px]">
        <p className="text-[16px] leading-[22px] text-[#938A8A] text-center">You have not ordered any products yet</p>
        <ImSad className="w-[56.09px] text-[#FFB100] mt-[8.8px] mb-[17.45px] text-[60px]"/>
        <div className="w-[284.84px] border-[3px] border-[#BB0707] h-0 bg-[#BB0707]"></div>
        <div className="flex justify-between pt-[20.97px] w-[284.84px] pb-[47px]">
            <p>Sub Total:</p>
            <p>$ 0.0</p>
        </div>
        <Button
            className="bg-[#FFB100] rounded-[100px] py-[20px] px-[80px] "
            name="Purchase"
            onClick={() => null}
        />
    </div>
  )
}

export default Total;
//rafce