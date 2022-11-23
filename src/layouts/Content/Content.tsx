import React, { useEffect, useState } from 'react';
import Dealday from '../deal-day/deal-day';
import Navbar from '../navbar/navbar';
import Button from '../../components/Button';
import Hot from '../../assets/images/hot.svg';
import Category from '../../components/category/category';
import Product from '../../components/product/product';
// import products from '../../data/products';
import OrderSidebar from '../order-sidebar/order-sidebar';
import { Dispatch, SetStateAction } from 'react';
import { TbEdit } from 'react-icons/tb';
import burger from '../../assets/images/burger.svg';
import ice from '../../assets/images/ice.svg';
import hotdog from '../../assets/images/hotdog.svg';
import pizza from '../../assets/images/pizza.svg';
import french from '../../assets/images/french.svg';
import drink from '../../assets/images/drink.svg';
import { ProductType } from '../../interface';
import { DocumentData } from 'firebase/firestore/lite';
import { Pagination } from 'antd';
import { count } from 'console';
import { OrderProduct } from '../../pages/home-page/home-page';

const arr = [
  {
    title: 'Hot',
    image: Hot,
    id: '1',
  },
  {
    title: 'Burger',
    image: burger,
    id: '2',
  },
  {
    title: 'Ice',
    image: ice,
    id: '3',
  },
  {
    title: 'HotDog',
    image: hotdog,
    id: '4',
  },
  {
    title: 'Pizza',
    image: pizza,
    id: '5',
  },
  {
    title: 'French',
    image: french,
    id: '6',
  },
  {
    title: 'Drink',
    image: drink,
    id: '7',
  },
];

type IProps = {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  products: ProductType[] | DocumentData[];
  productsDeal: ProductType[] | DocumentData[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPage: number;
  setProductsOrder: React.Dispatch<React.SetStateAction<OrderProduct[]>>;
  productsOrder: OrderProduct[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  activeCategory: string;
  getProducts: () => Promise<void>;
};

const Content: React.FC<IProps> = ({
  setIsOpenModal,
  products,
  productsDeal,
  setCurrentPage,
  currentPage,
  totalPage,
  productsOrder,
  setProductsOrder,
  setCount,
  count,
  setActiveCategory,
  activeCategory,
}) => {
  const [orderaa, setOrderaa] = useState([...productsOrder]);
  console.log(productsOrder);

  return (
    <div className="p-[30px]">
      <Dealday
        setProductsOrder={setProductsOrder}
        productsOrder={productsOrder}
        products={productsDeal}
      />
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
                className=" text-[32px] bg-[#BB0707] w-[283px] h-[63px] flex justify-center items-center"
              />
            </div>
            <div className="flex justify-between items-center gap-[100px] w-[32%] ">
              <Button
                name="Menu Order"
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
              <div>
                <div className=" max-w-full overflow-x-scroll scrolll mr-[30px] shadow-lg shadow-gray-500 rounded-[30px]">
                  <div className="w-fit flex justify-start gap-x-[47px]">
                    {arr.map((item) => {
                      return (
                        <Category
                          onClick={() => {
                            setCurrentPage(1);
                            if (activeCategory === item.id) {
                              setActiveCategory('');
                            } else {
                              setActiveCategory(item.id);
                            }
                          }}
                          activeCategory={activeCategory}
                          key={item.title}
                          title={item.title}
                          id={item.id}
                          image={item.image}
                        />
                      );
                    })}
                  </div>
                </div>
                <p className="text-[#BB0707] text-[24px] mt-[19.79px] mb-[28px] leading-[23.68px]">
                  Choose Order
                </p>
                <div className="flex flex-wrap gap-y-[28px]">
                  {products.map((item) => (
                    <Product
                      onClick={() => {
                        console.log(orderaa);
                        if (orderaa.length > 0) {
                          console.log(orderaa);

                          const arr = [...orderaa];
                          const index = arr?.findIndex(
                            (product) => product.data.id === item.id
                          );
                          if (index > -1) {
                            arr[index].count = arr[index].count + 1;
                            setCount(arr[index].count);
                            arr[index].total = item.price * arr[index].count;
                            setOrderaa([...arr]);
                            setProductsOrder(arr);
                          } else {
                            const arr = [
                              ...productsOrder,
                              { count: 1, total: item.price, data: item },
                            ];
                            setOrderaa([...arr]);
                            setProductsOrder(arr);
                          }
                        } else {
                          console.log(orderaa);

                          const arr = [
                            ...orderaa,
                            { count: 1, total: item.price, data: item },
                          ];
                          console.log(arr);
                          setOrderaa([...arr]);
                          setProductsOrder([...arr]);
                        }
                        localStorage.setItem(
                          'list-product-order',
                          JSON.stringify({
                            data: productsOrder,
                          })
                        );
                      }}
                      key={item.id}
                      product={item}
                    />
                  ))}
                </div>
                <div></div>
              </div>
              {products.length > 0 && (
                <Pagination
                  className="flex justify-center mt-10"
                  current={currentPage === 1 ? 1 : currentPage}
                  total={totalPage}
                  pageSize={6}
                  onChange={(page) => setCurrentPage(page)}
                />
              )}
            </div>

            <div>
              <OrderSidebar count={count} productsOrder={productsOrder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
