import { ImSad } from 'react-icons/im';

const EmptyOrder = () => {
  return (
    <div>
      <p className="text-[16px] leading-[22px] text-[#938A8A] text-center">
        You have not ordered any products yet
      </p>
      <ImSad className="w-[56.09px] mx-auto text-[#FFB100] mt-10 mb-[17.45px] text-[60px]" />
    </div>
  );
};

export default EmptyOrder;
