import Product from '../../components/product/product';
import chicken from '../../assets/images/chicken.png';
import hot from '../../assets/images/hot.svg';

const arr = [
  {
    image: chicken,
    name: 'Chicken',
    price: 10,
    deal: 50
  },
  {
    image: chicken,
    name: 'Chicken',
    price: 200,
    deal: 50
  },
  {
    image: chicken,
    name: 'Chicken',
    price: 10,
    deal: 50
  },
  {
    image: chicken,
    name: 'Chicken',
    price: 10,
    deal: 50
  },
  {
    image: chicken,
    name: 'Chicken',
    price: 10,
    deal: 10
  },
  {
    image: chicken,
    name: 'Chicken',
    price: 10,
    deal: 50
  },
  {
    image: chicken,
    name: 'Chicken',
    price: 10,
    deal: 50
  },
];

const Dealday = () => {
  return (
    <div className="relative mx-auto mt-[100px] flex rounded-[50px] border-[#BB0707] border-[5px] py-[50px]">
      {arr.map((item, index) => (
        <Product
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          deal={item.deal}
        />
      ))}
      <div className="absolute left-[50%] translate-x-[-50%] top-[-17%] translate-y-[17%] z-[1000] flex items-center justify-around max-w h-[90.77px] border-[5px] border-[#BB0707] rounded-[50px] bg-white">
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
