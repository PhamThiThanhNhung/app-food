import Product from '../../components/product/product';
import chicken from '../../assets/images/chicken.png';
import hot from '../../assets/images/hot.svg';

const Dealday = (props: any) => {
  return (
    <div className="relative mx-auto mt-[100px] flex rounded-[50px] border-[#BB0707] border-[5px] py-[50px]">
      {props.products.map((item: any) => (
        <Product
          key={item.id}
          image={item.image.url}
          name={item.name}
          price={item.price}
          deal={item.deal}
        />
      ))}
      <div className="absolute left-[50%] translate-x-[-50%] top-[-17%] translate-y-[17%] z-[10] flex items-center justify-around max-w h-[90.77px] border-[5px] border-[#BB0707] rounded-[50px] bg-white">
        <img
          src={hot}
          className="items-center bg-[#FFB100] w-[55px] h-[50.77px] rounded-[60px]"
          alt="product"
        />
        <span className=" text-[#BB0707] text-[32px]">Deals of the day</span>
      </div>
    </div>
  );
};
export default Dealday;
