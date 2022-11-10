import Search from '../../components/input-search/search';
import { FaRegHeart } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import logodf from '../../assets/images/logodf.png';
import Banner from '../../assets/images/Banner.png';

function Header() {
  return (
    <div>
      <div className="w-full h-[140px] bg-[#F5AF11] relative ">
        <div className="w-[93px] h-[97px] absolute right-[80%] top-[50%] translate-x-[-80%] translate-y-[-50%]">
          <img src={logodf} />
        </div>
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Search />
        </div>
        <div>
          <FaRegHeart className="w-[60px] h-[53.21px] fill-white absolute right-[15%] top-[50%] translate-x-[-15%] translate-y-[-50%] " />
          <BsCart2 className="w-[61.25px] h-[45.94px] fill-white absolute right-[10%] top-[50%] translate-x-[-10%] translate-y-[-50%] " />
          <IoMdContact className="w-[61.25px] h-[61.25px] fill-white absolute right-[5%] top-[50%] translate-x-[-5%] translate-y-[-50%]" />
        </div>
      </div>

      <div>
        <img src={Banner} />
      </div>
    </div>
  );
}
export default Header;
