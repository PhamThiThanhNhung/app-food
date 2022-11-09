import React from 'react'
import chicken from "../../assets/images/chicken.png"
import cart from "../../assets/images/cart.png"
import heart from "../../assets/images/heart.png"


export default function product() {
    return (
        <div className="mx-[18px] w-[217px] hoverCustomer drop-shadow-[10px_10px_10px_rgba(0,0,0,0.12)] h-[288px] rounded-[30px] ">
            <div className="iconDetail">
                <img src={heart} className="iconP" alt="" />
                <img src={cart} className="iconP" alt="" />
            </div>

            <div className="sale">30%</div>

            <div className="w-[217px] h-[205px] topProduct rounded-t-[30px]">
                <img src={chicken} alt="chicken" className="w-full h-full"></img>
            </div>

            <div className="test text-[24px] bottomProduct flex-col justify-center h-[83px] rounded-b-[30px]">
                <div className="colorPrimary text-xl text-center ">Fred Chicken</div>
                <div className="colorPrimary opacity-50 text-center">1.2 USD</div>
            </div>
        </div>
    )
}
