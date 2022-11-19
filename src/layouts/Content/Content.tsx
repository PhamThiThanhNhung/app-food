import React from 'react';
import Dealday from '../deal-day/deal-day';
import Navbar from '../navbar/navbar';
import Button from '../../components/Button';
import Hot from '../../assets/images/hot.svg';
import Category from '../../components/category/category';
import Product from '../../components/product/product';
import Total from '../../components/total/total';
import products from '../../data/products';
import { Dispatch, SetStateAction } from 'react';
import { TbEdit } from 'react-icons/tb';

const arr = [
  {
    title: 'Hot',
    image: Hot,
  },
  {
    title: 'Burgur',
    image: Hot,
  },
  {
    title: 'Ice',
    image: Hot,
  },
  {
    title: 'HotDog',
    image: Hot,
  },
  {
    title: 'Hot',
    image: Hot,
  },
  {
    title: 'Hot',
    image: Hot,
  },
  {
    title: 'Hot',
    image: Hot,
  },
];
const arrProducts = [];

type IProps = {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

const Content: React.FC<IProps> = ({ setIsOpenModal }) => {
  // use effect hoac useLoaderData lay du lieu, roi thay the doan nay
  const deals = products.filter((p) => p.deal && p.deal > 0);
  return (
    <div className="p-[30px]">
      <Dealday products={deals} />
      <div className="flex pt-[30px]  w-full ">
        <div className="w-[20%]">
          <div className="mr-[50px]">
            <Navbar />
          </div>
        </div>
        <div className="w-[80%]">
          <div className=" flex justify-between w-[100%]">
            <div className="w-[68%]">
              <Button
                name="Menu Category"
                onClick={() => null}
                className=" text-[32px] bg-[#BB0707] w-[283px] h-[63px] flex justify-center items-center"
              />
            </div>
            <div className="flex justify-between items-center gap-[100px] w-[32%] ">
              <Button
                name="Menu Order"
                onClick={() => null}
                className="text-[32px] bg-[#BB0707] w-[283px] h-[63px] flex justify-center items-center"
              />
              <TbEdit
                className="text-5xl stroke-[#BB0707] cursor-pointer"
                onClick={() => setIsOpenModal(true)}
              />
            </div>
          </div>
          <div className="flex mt-[46px] ">
            <div className="w-[calc(100%-389px)]">
              <div className=" max-w-full overflow-x-scroll scrolll mr-[30px] shadow-lg shadow-gray-500 rounded-[30px]">
                <div className="w-fit flex justify-start gap-x-[47px]">
                  {arr.map((item) => {
                    return <Category title={item.title} image={item.image} />;
                  })}
                </div>
              </div>
              <p className="text-[#BB0707] text-[24px] mt-[19.79px] mb-[28px] leading-[23.68px]">
                Choose Order
              </p>
              <div>
                <div className="flex flex-wrap gap-y-[28px]">
                  {products.map((item) => (
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
              <Total setIsOpenOrder={function (value: React.SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
