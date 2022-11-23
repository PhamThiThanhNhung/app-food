import Product from '../../components/product/product';
import chicken from '../../assets/images/chicken.png';
import hot from '../../assets/images/hot.svg';
import { ProductType } from '../../interface';
import { DocumentData } from 'firebase/firestore';
import { memo } from 'react';
import { OrderProduct } from '../../pages/home-page/home-page';

interface IProps {
  setProductsOrder: React.Dispatch<React.SetStateAction<OrderProduct[]>>;
  productsOrder: OrderProduct[];
  products: ProductType[] | DocumentData[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Dealday: React.FC<IProps> = ({
  productsOrder,
  setProductsOrder,
  products,
  setCount,
}) => {
  return (
    <div className="relative mx-auto mt-[100px] flex rounded-[50px] border-[#BB0707] border-[5px] py-[50px]">
      {products.map((item: any) => (
        <Product
          onClick={() => {
            if (productsOrder.length > 0) {
              const arr = [...productsOrder];
              const index = arr?.findIndex(
                (product) => product.data.id === item.id
              );
              if (index > -1) {
                arr[index].count = arr[index].count + 1;
                setCount(arr[index].count);
                arr[index].total = item.price * arr[index].count;
                setProductsOrder(arr);
              } else {
                const arr = [
                  ...productsOrder,
                  { count: 1, total: item.price, data: item },
                ];
                setProductsOrder(arr);
              }
            } else {
              const arr = [
                ...productsOrder,
                { count: 1, total: item.price, data: item },
              ];
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
      <div className="absolute left-[50%] translate-x-[-50%] top-[-17%] translate-y-[17%] z-[10] flex items-center justify-around max-w h-[90.77px] border-[5px] border-[#BB0707] rounded-[50px] bg-white">
        <img
          src={hot}
          className="items-center bg-[#FFB100] w-[55px] h-[50.77px] rounded-[60px]"
          alt="product"
        />
        <span className=" text-[#BB0707] text-[32px]">Deals of the day</span>
      </div>
    </div>
  );
};
export default memo(Dealday);
