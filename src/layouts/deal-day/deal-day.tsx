import Product from "../../components/product/product"
import chicken from "../../assets/images/chicken.png"
import hot from "../../assets/images/hot.svg"

const Dealday = ()=> {
    return (
        <div className="relative mt-[100px] flex rounded-[50px] h-[368px] w-[1843px] border-[#BB0707] border-[5px] pt-[50px] px-[44px] ">
            <Product Image={chicken} Name={"Chicken"} Price={10}/>
            <Product Image={chicken} Name={"Chicken"} Price={20}/>
            <Product Image={chicken} Name={"Chicken"} Price={30}/>
            <Product Image={chicken} Name={"Chicken"} Price={10}/>
            <Product Image={chicken} Name={"Chicken"} Price={10}/>
            <Product Image={chicken} Name={"Chicken"} Price={10}/>
            <Product Image={chicken} Name={"Chicken"} Price={10}/>
            <div className="absolute left-[50%] translate-[-50%] top-[-20%] translate-[20%] z-[1000] flex w-[382px] h-[90.77px] border-[5px] border-[#BB0707] rounded-[50px] bg-white">
                <span><img src={hot} className="items-center bg-[#FFB100] w-[55px] h-[50.77px] rounded-[60px]"/></span>
                <p className="text-center text-[#BB0707] w-[55px] h-[50.77px] text-[32px]">Deals of the day</p>
            </div>
        </div>
    )
}
export default Dealday;