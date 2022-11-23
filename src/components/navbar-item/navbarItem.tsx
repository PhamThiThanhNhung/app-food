import React, { ComponentType } from 'react';
import { Link } from 'react-router-dom';

type IProps = {
  iconActive: ComponentType;
  iconUnActive: ComponentType;
  title: string;
  link: string;
};

type DataNavbarItem = {
  navbarItems: IProps[];
  currentItem: string;
  setCurrentItem: React.Dispatch<React.SetStateAction<string>>;
};

const NavbarItem: React.FC<DataNavbarItem> = ({
  navbarItems,
  currentItem,
  setCurrentItem,
}) => {
  return (
    <>
      {navbarItems.map((item: IProps, index: number) => (
        <Link
          key={item.link}
          to={item.link}
          onClick={() => {
            setCurrentItem(item.title);
            window.scroll(0, 0);
          }}
        >
          <div
            key={index}
            className={
              currentItem === item.title
                ? 'flex flex-col items-center bg-[#BB0707] justify-center gap-5 h-[173.21px] w-[180px] rounded-[30px] shadow-gray-400 shadow-lg'
                : 'group flex flex-col items-center justify-center gap-5 h-[173.21px] w-[180px] rounded-[30px] shadow-gray-400 shadow-lg hover:cursor-pointer hover:bg-[#BB0707]'
            }
          >
            {currentItem === item.title ? (
              <item.iconActive />
            ) : (
              <item.iconUnActive />
            )}
            <span
              className={
                currentItem === item.title
                  ? 'text-[24px] font-bold text-white'
                  : 'text-[24px] font-bold text-[#BB0707] group-hover:text-white'
              }
            >
              {item.title}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NavbarItem;
