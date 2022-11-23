import chicken from '../../../assets/images/chicken.png';
import { OrderProduct } from '../../../pages/home-page/home-page';

interface IProps {
  productsOrder: OrderProduct[];
}

const ProductsOrder: React.FC<IProps> = ({ productsOrder }) => {
  return (
    <div>
      <ul>
        <li className=" flex justify-between text-[#BB0707]  font-bold">
          <p className="ms:w-[50%] w-[50%]">Product</p>
          <p className="ms:w-[30%] w-[30%] flex justify-center items-center">
            Amount
          </p>
          <p className="ms:w-[20%] w-[20%] flex justify-end">Price</p>
        </li>
        {productsOrder.map((item) => (
          <li
            key={item.data.id}
            className="w-[100%] h-[46px] flex lg:text-[15px] text-[15px] text-[#BB0707] mb-[36px]"
          >
            <div className="flex justify-start items-center ms:w-[50%] w-[50%] ">
              <img
                src={item.data.image.url}
                alt="chicken"
                className="lg:w-[49px] lg:max-w-[49px] w-[40px] max-w-[40px]  h-full max-h-[46px]"
              />
              <p>{item.data.name}</p>
            </div>
            <div className="ms:w-[30%] w-[30%] flex justify-center items-center">
              <span>{item.count}</span>
            </div>
            <div className="ms:w-[20%] w-[20%] flex justify-end items-center mr-[2px]">
              <span>{Math.ceil(item.total)}$</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsOrder;
