import React, { ComponentType } from 'react';
import { Link } from 'react-router-dom';

type IProps = {
  icon: ComponentType;
  title: string;
  link: string;
};

type DataNavbarItem = {
  navbarItems: IProps[];
};

const NavbarItem: React.FC<DataNavbarItem> = ({ navbarItems }) => {
  return (
    <>
      {navbarItems.map((item: IProps, index: number) => (
        <Link to={item.link}>
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-5 h-[173.21px] w-[180px] rounded-[30px] shadow-gray-400 shadow-lg hover:cursor-pointer hover:bg-[#BB0707]
    "
          >
            <item.icon />
            <span className=" text-[24px] font-bold text-[#BB0707] group-hover:text-white">
              {item.title}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NavbarItem;
