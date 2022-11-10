import Search from '../../components/input-search/search';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import logodf from '../../assets/images/logodf.png';
import Banner from '../../assets/images/Banner.png';

function Header() {
  return (
    <div>
      <div className="w-full h-[140px] flex justify-around items-center bg-[#F5AF11] relative ">
        <div className="w-[93px] cursor-pointer">
          <img src={logodf} className="w-full object-cover" alt="logo" />
        </div>
        <Search />
        <div className="flex justify-center items-center gap-[42px]">
          <AiOutlineHeart className="text-6xl fill-white hover:cursor-pointer hover:fill-[#BB0707] hover:scale-105" />
          <AiOutlineShoppingCart className="text-6xl fill-white hover:cursor-pointer hover:fill-[#BB0707] hover:scale-105" />
          <FaRegUserCircle className="text-5xl fill-white hover:cursor-pointer hover:fill-[#BB0707] hover:scale-105" />
        </div>
      </div>
      <div>
        <img src={Banner} alt="banner" />
      </div>
    </div>
  );
}
export default Header;
