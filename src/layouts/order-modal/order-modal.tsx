import { Dispatch, SetStateAction } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import shoppingCart from '../../assets/images/shopping-cart.svg';

type IProps = {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

const OrderModal: React.FC<IProps> = ({ setIsOpenModal }) => {
  return (
    <div className="w-[500px] h-[343px] bg-white rounded-[20px]">
      <div className="flex justify-between items-center px-5 pt-5">
        <span className="text-[27px] text-[#BB0707] font-bold">Order</span>
        <AiOutlineCloseCircle
          onClick={() => setIsOpenModal(false)}
          className="text-3xl fill-[#BB0707] hover:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center gap-5 mt-10">
        <img className="w-[100px]" src={shoppingCart} alt="shopping-cart" />
        <span className="">You have not ordered any products yet </span>
        <HiOutlineEmojiSad className="text-5xl stroke-[#FFB100]" />
      </div>
    </div>
  );
};

export default OrderModal;
