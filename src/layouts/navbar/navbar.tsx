import { Routes, Route, Router } from 'react-router-dom'
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
    link: '/'
  },
  {
    icon: () => (
      <BsFileText className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Blog',
    link: '/blog'
  },
  {
    icon: () => (
      <AiFillMessage className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Messages',
    link: '/messages'
  },
  {
    icon: () => (
      <AiFillContacts className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Contact us',
    link: '/contact-us'
  },
  {
    icon: () => (
      <AiFillSetting className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Settings',
    link: '/settings'
  },
  {
    icon: () => (
      <HiLogin className="fill-[#BB0707] group-hover:fill-white text-7xl" />
    ),
    title: 'Login',
    link: '/login'
  },
];


const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <NavbarItem navbarItems={navbarItems} />
      </div>
    </div>
  );
};
export default Navbar;
