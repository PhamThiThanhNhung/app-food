import React, { useEffect, useState } from 'react';
import ordercart from '../../assets/images/ordercart.svg';
import x from '../../assets/images/x.svg';
import chicken from '../../assets/images/chicken.png';
import trash from '../../assets/images/trash.svg';
import Button from '../../components/Button';
import { OrderProduct } from '../../pages/home-page/home-page';

interface IProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  productsOrder: OrderProduct[];
  setProductsOrder: React.Dispatch<React.SetStateAction<OrderProduct[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const OrderProductModal: React.FC<IProps> = ({
  setIsOpenModal,
  productsOrder,
  setProductsOrder,
  setCount,
  count,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [prOrder, setPrOrder] = useState([...productsOrder]);

  const handleDecreaseCount = (id: any) => {
    const index = productsOrder.findIndex((item) => item.data.id === id);
    if (index > -1) {
      productsOrder[index].count = productsOrder[index].count - 1;
      setCount(productsOrder[index].count);
      productsOrder[index].total =
        productsOrder[index].data.price * productsOrder[index].count;
      if (productsOrder[index].count <= 0) {
        productsOrder.splice(index, 1);
      }
    }

    setProductsOrder(productsOrder);
    localStorage.setItem(
      'list-product-order',
      JSON.stringify({
        data: productsOrder,
      })
    );
  };

  const handleCreaseCount = (id: any) => {
    const index = productsOrder.findIndex((item) => item.data.id === id);
    if (index > -1) {
      productsOrder[index].count = productsOrder[index].count + 1;
      setCount(productsOrder[index].count);
      productsOrder[index].total =
        productsOrder[index].data.price * productsOrder[index].count;
    }

    setProductsOrder(productsOrder);
    localStorage.setItem(
      'list-product-order',
      JSON.stringify({
        data: productsOrder,
      })
    );
  };

  const handleDelete = (id: any) => {
    let arr = [...productsOrder];
    const index = arr.findIndex((item) => item.data.id === id);
    if (index > -1) {
      arr.splice(index, 1);
      setCount(0);
    }
    setProductsOrder(arr);
    setCount(Math.random());
    localStorage.setItem(
      'list-product-order',
      JSON.stringify({
        data: arr,
      })
    );
  };

  useEffect(() => {
    let total = 0;
    const arr = [...productsOrder];
    for (let item of arr) {
      total = total + item.total;
    }
    setTotalPrice(total);
  }, [productsOrder, count]);

  return (
    <div className="lg:w-[932px] w-[95%] h-[700px] border-[3px] bg-white border-[#BB0707] rounded-[30px] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] px-[16px] py-[14px]">
      <div className="flex justify-between items-start">
        <div className="flex justify-center items-center">
          <img src={ordercart} alt=""></img>
          <p className="text-[#BB0707] text-[32px] pt-[2px] leading-[44px] font-bold">
            Order
          </p>
        </div>
        <img
          onClick={() => setIsOpenModal(false)}
          src={x}
          className="w-[45px] h-[41px]"
          alt=""
        ></img>
      </div>
      <div>
        <ul className="sm:px-[40px] px-[0px] h-[400px] overflow-auto">
          <li className="pt-[41.3px] flex justify-between text-[#BB0707] leading-[33px] font-bold pb-[14px] pl-[8px]">
            <p className="ms:w-[50%] w-[40%]">Product</p>
            <p className="ms:w-[28%] w-[30%]">Amount</p>
            <p className="ms:w-[22%] w-[30%]">Price</p>
          </li>
          {productsOrder.map((item) => (
            <li
              key={item.data.id}
              className="w-[100%] h-[70px] drop-shadow-lg bg-white rounded-[25px] flex justify-between items-center text-[#BB0707] lg:text-[24px] text-[16px] font-[600px] mb-[10px]"
            >
              <div className="flex justify-start items-center ms:w-[50%] w-[40%]">
                <img
                  src={item.data.image.url}
                  alt="chicken"
                  className="lg:w-[101px] lg:max-w-[101px] w-[80px] max-w-[80px]  h-full max-h-[70px]"
                />
                <p>{item.data.name}</p>
              </div>
              <div className="ms:w-[28%] w-[30%] flex justify-start items-center gap-x-[22px]">
                <span
                  onClick={() => handleDecreaseCount(item.data.id)}
                  className="cursor-pointer"
                >
                  -
                </span>
                <span>{item.count}</span>
                <span
                  onClick={() => handleCreaseCount(item.data.id)}
                  className="cursor-pointer"
                >
                  +
                </span>
              </div>
              <div className="ms:w-[22%] w-[30%] flex justify-between items-center">
                <span>{Math.ceil(item.total)} $</span>
                <img
                  onClick={() => handleDelete(item.data.id)}
                  src={trash}
                  className="cursor-pointer mr-[24px]"
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:px-[40px] mt-[49px]">
        <div className="flex justify-between text-[24px] font-bold text-[#BB0707]">
          <p className="ms:w-[78%] w-[70%]">Price</p>
          <p className="ms:w-[22%] w-[30%]">{Math.ceil(totalPrice)}$</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setProductsOrder([]);
              localStorage.setItem(
                'list-product-order',
                JSON.stringify({ data: [] })
              );
            }}
            className="flex justify-center items-center text-[18px] text-white w-[258.27px] h-[65px] bg-[#FFB100] rounded-[50px] mt-[32px]"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProductModal;
