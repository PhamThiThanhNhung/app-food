import Category from '../../components/category/category';
import Dealday from '../../layouts/deal-day/deal-day';
import Header from '../../layouts/header/header';
import Navbar from '../../layouts/navbar/navbar';
import Hot from '../../assets/images/hot.svg';

const HomePage = () => {
  return (
    <div className="mb-10">
      <Header />
      <Dealday />
      <div className="w-[95%] grid grid-cols-12 mx-auto mt-10">
        <div className="col-span-2">
          <Navbar />
        </div>
        <div className="col-span-8 mt-8">
          <div className="mb-10">
            <span className="text-white text-[32px] py-5 px-10 bg-[#BB0707] rounded-[20px]">
              Menu Category
            </span>
          </div>
          <div className="grid grid-cols-7">
            <Category title={'Hot'} image={Hot} />
            <Category title={'Hot'} image={Hot} />
            <Category title={'Hot'} image={Hot} />
            <Category title={'Hot'} image={Hot} />
            <Category title={'Hot'} image={Hot} />
            <Category title={'Hot'} image={Hot} />
            <Category title={'Hot'} image={Hot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
