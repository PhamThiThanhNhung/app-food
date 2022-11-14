import React from 'react'
import Dealday from '../deal-day/deal-day'
import Navbar from '../navbar/navbar'
import Button from '../../components/Button'
import chicken from '../../assets/images/chicken.png';
import Hot from '../../assets/images/hot.svg';
import Category from '../../components/category/category';
import Product from '../../components/product/product';
import Total from '../../components/Total/total';

const arr = [
    {
        title: "Hot",
        image: Hot
    },
    {
        title: "Burgur",
        image: Hot
    },
    {
        title: "Ice",
        image: Hot
    },
    {
        title: "HotDog",
        image: Hot
    },
    {
        title: "Hot",
        image: Hot
    },
    {
        title: "Hot",
        image: Hot
    },
    {
        title: "Hot",
        image: Hot
    },

]
const arrProducts = [
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
    {
        image: chicken,
        name: "Chicken",
        price: 1.2,
    },
   

]

const Content = () => {
    return (
        <div className="p-[30px]">
            <Dealday />
            <div className="flex pt-[30px]  w-full ">
                <div className="w-[20%]">
                    <div className="mr-[50px]">
                        <Navbar />
                    </div>
                </div>
                <div className="w-[80%]">
                    <div className=" flex justify-between">
                        <Button
                            name="Menu Category"
                            onClick={() => null}
                        />
                        <Button
                            name="Menu Order"
                            onClick={() => null}
                        />
                    </div>
                    <div className="flex mt-[46px] ">
                        <div className="w-[calc(100%-389px)]">
                            <div className=" max-w-full overflow-x-scroll mr-[30px] shadow-lg shadow-gray-500 rounded-[30px]">
                                <div className="w-fit flex justify-start gap-x-[47px]">
                                    {arr.map((item) => {
                                        return (
                                            <Category
                                                title={item.title}
                                                image={item.image}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <p className="text-[#BB0707] text-[24px] mt-[19.79px] mb-[28px] leading-[23.68px]">Choose Order</p>
                            <div>
                                <div className="flex flex-wrap gap-y-[28px]">
                                    {arrProducts.map((item) => (
                                        <Product
                                            image={item.image}
                                            name={item.name}
                                            price={item.price}
                                            
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div>
                            <Total />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Content
