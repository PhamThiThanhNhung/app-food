import React from 'react';
interface IProps {
  title: string;
  id: number | string;
  image: any;
  onClick: any;
  activeCategory: string | number | null | undefined;
}

const Category: React.FC<IProps> = ({
  title,
  image,
  onClick,
  activeCategory,
  id,
}) => {
  return (
    <div
      onClick={onClick}
      className={
        activeCategory === id
          ? 'flex flex-col items-center mt-[10px] h-[198.21px] w-[134px] max-w-[134px] text-2xl rounded-[30px] shadow-orange-300 shadow-lg hover:cursor-pointer bg-[#FFB100]'
          : 'group flex flex-col items-center mt-[10px] h-[198.21px] w-[134px] max-w-[134px] bg-white text-2xl rounded-[30px] shadow-orange-300 shadow-lg hover:cursor-pointer hover:bg-[#FFB100]'
      }
    >
      <div className="my-[10px] bg-[#BB0707] px-[30px] py-[22px] rounded-full">
        <img src={image} className="object-cover" alt="hot" />
      </div>
      <span
        className={
          activeCategory === id
            ? 'text-center text-[24px] font-bold text-white'
            : 'text-center text-[24px] font-bold text-[#BB0707] group-hover:text-white'
        }
      >
        {title}
      </span>
    </div>
  );
};

export default Category;
