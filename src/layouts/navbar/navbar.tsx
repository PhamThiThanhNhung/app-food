import React from 'react';
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
    icon: () => (
      <AiFillHome className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Home',
  },
  {
    icon: () => (
      <BsFileText className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Blog',
  },
  {
    icon: () => (
      <AiFillMessage className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Messages',
  },
  {
    icon: () => (
      <AiFillContacts className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Contact us',
  },
  {
    icon: () => (
      <AiFillSetting className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Settings',
  },
  {
    icon: () => (
      <HiLogin className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Login',
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <NavbarItem navbarItems={navbarItems} />
    </div>
  );
};
export default Navbar;
