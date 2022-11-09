import Hot from "../../assets/images/hot.png";

const Category = () => {
  return (
    <div className="flex-col items-center h-[198.21px] w-[134px] p-2 border-4 text-center bg-white	text-zinc-50 text-2xl	rounded-[30px]">
      <img src={Hot} className="w-[110.55px] h-[106.21px] " alt="" />
      <span className="text-center font-bold text-red-600 w-[44px] h-[33px]">
        Hot
      </span>
    </div>
  );
};

export default Category;
