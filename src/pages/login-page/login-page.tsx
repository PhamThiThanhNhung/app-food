import React from 'react'
import bannera from '../../assets/images/bannera.jpg'
import {
  BsFacebook,
  BsApple
} from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import Button from '../../components/Button'


const Login = () => {
  return (
    <div className="bg-[#FFB100] w-screen h-screen relative">
      <div className="w-[943px] h-[553px] flex absolute left-[50%] top-[-40px] translate-x-[-50%] translate-y-[30%] ">
        <div className="w-[100%] h-[100%] rounded-[25px]">
          <img src={bannera} className="w-full bg-cover"></img>
          <div className="absolute top-0 left-[43%] w-[530px] ">
            <div className="w-[100%] h-[100] px-[70px]">
              <p className="text-[32px] text-[#BB0707] leading-[44px] pt-[50px] text-center pb-[40px] font-bold">Đăng nhập</p>
              <input className="w-[390px] h-[50px] border-[#BB0707] border-[3px] rounded-[20px] px-4 focus:outline-none focus-within:outline-none mb-[30px]" placeholder="Email/Số điện thoại/Tên đăng nhập"></input>
              <input className="w-[390px] h-[50px] border-[#BB0707] border-[3px] rounded-[20px] px-4 focus:outline-none focus-within:outline-none mb-[46px]" placeholder="Mật khẩu"></input>
              <Button
                name="Đăng nhập"
                className="w-[390px] h-[50px] bg-[#BB0707] rounded-[20px] text-[24px] text-center mb-[10px]"
                onClick={() => null}
              />
              <p className="mb-[10px] pl-[20px]">Quên mật khẩu?</p>
              <div className="flex justify-around">
                <div className="w-[155px] border-[0.5px] border-[#FFB100] h-0 bg-[#FFB100]"></div>
                <p className="mb-[20px]">Hoặc</p>
                <div className="w-[155px] border-[0.5px] border-[#FFB100] h-0 bg-[#FFB100]"></div>
              </div>
              <div className="flex justify-around pb-[20px]">
                <BsFacebook className="text-blue-600 text-[27px]"></BsFacebook>
                <BsApple className="text-[30px]" />
                <FcGoogle className="text-[30px]" />
              </div>
              <div className="flex justify-center">
                <p>Bạn mới biết đến chúng tôi?</p>
                <a href="https://www.youtube.com/results?search_query=react+router+dom" className="text-[#BB0707] pl-[15px]">Đăng kí</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
