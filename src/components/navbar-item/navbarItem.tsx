import React from 'react';
interface IProps {
  index: string;
  number: any;
}

const NavbarItem: React.FC<IProps> = ({ index, number }) => {
  return (
    <div
      className="group flex flex-col items-center h-[173.21px] w-[180px] text-2xl rounded-[50px] shadow-gray-400 shadow-lg hover:cursor-pointer hover:bg-[#BB0707]
    "
    >
      <div className="mx-[10px] rounded-full">
        <img
          src={number}
          className="object-cover px-[50px] py-[30px] "
          alt="hot"
        />
      </div>
      <span className=" text-[24px] font-bold text-[#BB0707] group-hover:text-white">
        {index}
      </span>
    </div>
  );
};

export default NavbarItem;
