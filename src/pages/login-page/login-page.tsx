import React from 'react';
import bannera from '../../assets/images/bannera.jpg';
import { BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/Button';

const Login = () => {
  return (
    <div className="bg-[#FFB100] w-screen h-screen flex justify-center">
      <div
        style={{ backgroundImage: `url(${bannera})` }}
        className="bg-cover bg-no-repeat bg-center h-full w-full sm:w-[640px] flex justify-center"
      >
        <div className="w-[90%] sm:w-[390px] h-[100] flex flex-col justify-center items-center">
          <p className="text-[32px] text-[#BB0707] leading-[44px] pt-[50px] text-center pb-[40px] font-bold">
            Đăng nhập
          </p>
          <input
            className="w-full h-[50px] border-[#BB0707] border-[3px] rounded-[20px] px-4 focus:outline-none focus-within:outline-none mb-[30px]"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
          />
          <input
            className="w-full h-[50px] border-[#BB0707] border-[3px] rounded-[20px] px-4 focus:outline-none focus-within:outline-none mb-[46px]"
            placeholder="Mật khẩu"
          ></input>
          <button className="w-full h-[50px] bg-[#BB0707] rounded-[20px] text-[24px] text-center mb-[10px] py-[10px] px-[20px]">
            Đăng nhập
          </button>
          <div className="flex justify-around items-center gap-x-[5px] w-full">
            <div className="w-full border-[0.5px] border-[#FFB100] h-0 bg-[#FFB100] relative">
              <span className="absolute top-1/2 left-1/2 bg-white px-[8px] translate-y-[-50%] translate-x-[-50%]">
                Hoặc
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center pb-[20px] gap-x-[6px] mt-[30px] w-full">
            <div className="flex items-center">
              <BsApple className="text-[30px] pr-[5px]" />
              <span>App store</span>
            </div>
            <div className="flex items-center">
              <BsFacebook className="text-blue-600 text-[27px]  pr-[5px]" />
              <span>Facebook</span>
            </div>
            <div className="flex items-center">
              <FcGoogle className="text-[30px] pr-[5px]" />
              <span>Google</span>
            </div>
          </div>
          <div className="flex justify-center">
            <p>Bạn mới biết đến chúng tôi?</p>
            <button className="text-[#BB0707] pl-[10px]">Đăng kí</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
