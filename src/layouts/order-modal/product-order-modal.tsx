import React from 'react'
import ordercart from '../../assets/images/ordercart.svg'
import x from '../../assets/images/x.svg'
import chicken from '../../assets/images/chicken.png'
import trash from '../../assets/images/trash.svg'
import Button from '../../components/Button'


const OrderProduct = () => {
    return (
        <div className="lg:w-[932px] w-[95%] h-[700px] border-[3px] border-[#BB0707] rounded-[30px] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] px-[16px] py-[14px]">
            <div className="flex justify-between items-start">
                <div className="flex justify-center items-center">
                    <img src={ordercart}></img>
                    <p className="text-[#BB0707] text-[32px] pt-[2px] leading-[44px] font-bold">Order</p>
                </div>
                <img src={x} className="w-[45px] h-[41px]"></img>

            </div>
            <div>
                <ul className="sm:px-[40px] px-[0px]">
                    <li className="pt-[41.3px] flex justify-between text-[#BB0707] leading-[33px] font-bold pb-[14px] pl-[8px]">
                        <p className="ms:w-[50%] w-[40%]">Product</p>
                        <p className="ms:w-[28%] w-[30%]">Amount</p>
                        <p className="ms:w-[22%] w-[30%]">Price</p>
                    </li>

                    <li className="w-[100%] h-[70px] drop-shadow-lg bg-white rounded-[25px] flex justify-between items-center text-[#BB0707] lg:text-[24px] text-[16px] font-[600px] mb-[10px]">
                        <div className="flex justify-start items-center ms:w-[50%] w-[40%]">
                            <img src={chicken} alt="chicken" className="lg:w-[101px] lg:max-w-[101px] w-[80px] max-w-[80px]  h-full max-h-[70px]" />
                            <p>Fried Chicken</p>
                        </div>
                        <div className="ms:w-[28%] w-[30%] flex justify-start items-center gap-x-[22px]">
                            <span className="cursor-pointer">-</span>
                            <span >1</span>
                            <span className="cursor-pointer">+</span>
                        </div>
                        <div className="ms:w-[22%] w-[30%] flex justify-between items-center">
                            <span>1.2 $</span>
                            <img src={trash} className="cursor-pointer mr-[24px]" />
                        </div>

                    </li>
                    <li className="w-[100%] h-[70px] drop-shadow-lg bg-white rounded-[25px] flex justify-between items-center text-[#BB0707] lg:text-[24px] text-[16px] font-[600px] mb-[10px]">
                        <div className="flex justify-start items-center ms:w-[50%] w-[40%]">
                            <img src={chicken} alt="chicken" className="lg:w-[101px] lg:max-w-[101px] w-[80px] max-w-[80px]  h-full max-h-[70px]" />
                            <p>Fried Chicken</p>
                        </div>
                        <div className="ms:w-[28%] w-[30%] flex justify-start items-center gap-x-[22px]">
                            <span className="cursor-pointer">-</span>
                            <span >1</span>
                            <span className="cursor-pointer">+</span>
                        </div>
                        <div className="ms:w-[22%] w-[30%] flex justify-between items-center">
                            <span>1.2 $</span>
                            <img src={trash} className="cursor-pointer mr-[24px]" />
                        </div>

                    </li>

                    <li className="w-[100%] h-[70px] drop-shadow-lg bg-white rounded-[25px] flex justify-between items-center text-[#BB0707] lg:text-[24px] text-[16px] font-[600px] mb-[10px]">
                        <div className="flex justify-start items-center ms:w-[50%] w-[40%]">
                            <img src={chicken} alt="chicken" className="lg:w-[101px] lg:max-w-[101px] w-[80px] max-w-[80px]  h-full max-h-[70px]" />
                            <p>Fried Chicken</p>
                        </div>
                        <div className="ms:w-[28%] w-[30%] flex justify-start items-center gap-x-[22px]">
                            <span className="cursor-pointer">-</span>
                            <span >1</span>
                            <span className="cursor-pointer">+</span>
                        </div>
                        <div className="ms:w-[22%] w-[30%] flex justify-between items-center">
                            <span>1.2 $</span>
                            <img src={trash} className="cursor-pointer mr-[24px]" />
                        </div>

                    </li>
                    <li className="w-[100%] h-[70px] drop-shadow-lg bg-white rounded-[25px] flex justify-between items-center text-[#BB0707] lg:text-[24px] text-[16px] font-[600px] mb-[10px]">
                        <div className="flex justify-start items-center ms:w-[50%] w-[40%]">
                            <img src={chicken} alt="chicken" className="lg:w-[101px] lg:max-w-[101px] w-[80px] max-w-[80px]  h-full max-h-[70px]" />
                            <p>Fried Chicken</p>
                        </div>
                        <div className="ms:w-[28%] w-[30%] flex justify-start items-center gap-x-[22px]">
                            <span className="cursor-pointer">-</span>
                            <span >1</span>
                            <span className="cursor-pointer">+</span>
                        </div>
                        <div className="ms:w-[22%] w-[30%] flex justify-between items-center">
                            <span>1.2 $</span>
                            <img src={trash} className="cursor-pointer mr-[24px]" />
                        </div>

                    </li>
                </ul>
            </div>
            <div className="sm:px-[40px] mt-[49px]">
                <div className="flex justify-between text-[24px] font-bold text-[#BB0707]">
                    <p className="ms:w-[78%] w-[70%]">Price</p>
                    <p className="ms:w-[22%] w-[30%]">4.8 $</p>
                </div>
                <div className="flex justify-center items-center">
                    <Button
                        name="Purchase"
                        onClick={() => null}
                        className="flex justify-center items-center text-[18px] text-white w-[258.27px] h-[65px] bg-[#FFB100] rounded-[50px] mt-[32px]"
                    />
                </div>
            </div>
        </div >
    )
}

export default OrderProduct;