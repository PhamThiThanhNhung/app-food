import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="relative w-[740px] h-[70]">
      <input
        type="text"
        className="w-[740px] h-[70px] px-4 focus:outline-none rounded-[50px] "
        placeholder=" Seach for food, coffe, ect,..."
      />
      <div className="w-[70px] h-[70px] bg-[#BB0707] rounded-[50px] absolute right-0 top-0">
        <div className="w-full h-full relative">
          <AiOutlineSearch className=" w-[35px] h-[35px] fill-white rounded-[50px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </div>
      </div>
    </div>
  );
}
export default Search;
