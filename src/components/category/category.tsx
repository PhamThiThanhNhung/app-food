import React from 'react';
interface IProps {
  title: string;
  image: any;
}

const Category: React.FC<IProps> = ({ title, image }) => {
  return (
    <div
      className="group flex flex-col items-center mt-[10px] h-[198.21px] w-[134px] max-w-[134px] bg-white text-2xl rounded-[30px] shadow-orange-300 shadow-lg hover:cursor-pointer hover:bg-[#FFB100] mr-[30px]
    "
    >
      <div className="my-[10px] bg-[#BB0707] px-[30px] py-[22px] rounded-full">
        <img src={image} className="object-cover" alt="hot" />
      </div>
      <span className="text-center text-[24px] font-bold text-[#BB0707] group-hover:text-white">
        {title}
      </span> 
    </div>
  );
};

export default Category;
