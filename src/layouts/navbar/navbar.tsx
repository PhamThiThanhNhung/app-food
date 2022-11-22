import { Routes, Route, Router } from 'react-router-dom';
import React, { useState } from 'react';
import NavbarItem from '../../components/navbar-item/navbarItem';
import {
  AiFillHome,
  AiFillMessage,
  AiFillContacts,
  AiFillSetting,
} from 'react-icons/ai';
import { BsFileText } from 'react-icons/bs';
import { HiLogin, HiOutlineLogin } from 'react-icons/hi';

const navbarItems = [
  {
    iconActive: () => <AiFillHome className="navbar-item-active" />,
    iconUnActive: () => <AiFillHome className="navbar-item" />,
    title: 'Home',
    link: '/',
  },
  {
    iconActive: () => <BsFileText className="navbar-item-active" />,
    iconUnActive: () => <BsFileText className="navbar-item" />,
    title: 'Blog',
    link: '/blog',
  },
  {
    iconActive: () => <AiFillMessage className="navbar-item-active" />,
    iconUnActive: () => <AiFillMessage className="navbar-item" />,
    title: 'Messages',
    link: '/messages',
  },
  {
    iconActive: () => <AiFillContacts className="navbar-item-active" />,
    iconUnActive: () => <AiFillContacts className="navbar-item" />,
    title: 'Contact us',
    link: '/contact-us',
  },
  {
    iconActive: () => <AiFillSetting className="navbar-item-active" />,
    iconUnActive: () => <AiFillSetting className="navbar-item" />,
    title: 'Settings',
    link: '/settings',
  },
  {
    iconActive: () => <HiLogin className="navbar-item" />,
    iconUnActive: () => <HiLogin className="navbar-item" />,
    title: 'Login',
    link: '/login',
  },
];

const Navbar = () => {
  const [currentItem, setCurrentItem] = useState<string>('Home');
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <NavbarItem
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          navbarItems={navbarItems}
        />
      </div>
    </div>
  );
};
export default Navbar;
