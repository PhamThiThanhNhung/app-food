import React from 'react';
import bannerbottom from '../../assets/images/bannerbottom.png';
import logodf from '../../assets/images/logodf.png';
import maqr from '../../assets/images/maqr.svg';
import Frame from '../../assets/images/Frame.svg';
import Badge from '../../assets/images/Badge.svg';
import Badgee from '../../assets/images/Badgee.svg';

const Footer = () => {
  return (
    <div className="relative">
      <img src={bannerbottom} alt=""></img>
      <div className="w-[70px] h-[70px] flex justify-center bg-white rounded-[25px] absolute left-[50%] translate-x-[-50%] top-[0%] translate-y-[10%]">
        <img src={logodf} className="w-[60px] h-[60px]"></img>
      </div>
      <div className="flex bg-[#F5AF11]">
        <div className="pl-[73px]">
          <p className="text-white	 flex-none pr-[30px]">
            Công ty
            <br />
            Giới thiệu
            <br />
            Trung tâm Trợ giúp khiếu nại
            <br />
            Quy chế
            <br />
            Điều khoản sử dụng
            <br />
            Bảo mật thông tin
            <br />
            Giải quyết khiếu nại
          </p>
        </div>
        <div>
          <p className="flex-initial	 text-white pr-[30px]">
            Website thương mại điện
            <br /> tử ND Fresh do ND Group là
            <br /> đơn vị chủ quản, chịu trách
            <br /> nhiệm và thực hiện các giao
            <br /> dịch liên quan mua sắm sản
            <br /> phẩm hàng hoá tiêu dùng
            <br /> thiết yếu.
          </p>
        </div>

        <div>
          <p className="flex-initial	 text-white pr-[104px] ">
            LIÊN HỆ VỚI CHÚNG TÔI <br />
            Địa chỉ: 266 Đội Cấn, Ba Đình,
            <br /> Hà Nội
            <br /> Điện thoại: 19006750
            <br /> Email: support@sapo.vn
          </p>
        </div>

        <div>
          <img className="pr-[162px] mb-3" src={maqr} alt="" />
          <img
            className="top-[57.35px] left-[19.64px] mb-4"
            src={Badge}
            alt=""
          />
          <img src={Badgee} alt="" />
        </div>

        <img className="pr-[60px]" src={Frame} alt="" />
      </div>

      <div className="h-[30px]  bg-[#BB0707]">
        <p className="text-center text-white font-sans">
          Copyright by FAST FOOD.All rights reserved | ES
        </p>
      </div>
    </div>
  );
};

export default Footer;
