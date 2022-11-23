import { useState, useEffect, useCallback } from 'react';
import Modal from '../../components/modal/modal';
import Content from '../../layouts/Content/Content';
import Footer from '../../layouts/footer/footer';
import Header from '../../layouts/header/header';
import EmptyOrderModal from '../../layouts/order-modal/empty-order-modal';
import OrderProductModal from '../../layouts/order-modal/product-order-modal';
import { db } from '../../firebase/config';
import { getDocs, collection, DocumentData } from 'firebase/firestore/lite';
import { ProductType } from '../../interface';

export interface OrderProduct {
  count: number;
  data: ProductType | DocumentData;
  total: number;
}

interface IProps {
  currentItem: string;
  setCurrentItem: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage: React.FC<IProps> = ({ currentItem, setCurrentItem }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productsNoDeal, setProducsNoDeal] = useState<
    ProductType[] | DocumentData[]
  >([]);
  const [productsDeal, setProductsDeal] = useState<
    ProductType[] | DocumentData[]
  >([]);
  const [allProductsNoDeal, setAllProductsNoDeal] = useState<
    ProductType[] | DocumentData[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  let [productsOrder, setProductsOrder] = useState<OrderProduct[]>([]);
  const [count, setCount] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('');

  const limit = 6;

  const ref = collection(db, 'products');

  const getProducts = useCallback(async () => {
    try {
      const data = await getDocs(ref);
      const products = data.docs.map((doc) => doc.data());
      if (products) {
        let deals = [];
        let noDeal = [];
        for (let item of products) {
          if (item.deal > 0) {
            deals.push(item);
          } else {
            noDeal.push(item);
          }
        }
        setTotalPage(noDeal.length);
        setProductsDeal(deals);
        setAllProductsNoDeal(noDeal);
        const startIndex = (currentPage - 1) * limit;
        const result = noDeal.slice(startIndex, startIndex + limit);
        setProducsNoDeal(result);
      } else {
        setProducsNoDeal([]);
        setProductsDeal([]);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (activeCategory) {
      const result = allProductsNoDeal.filter(
        (item) => item.category === activeCategory
      );
      setProducsNoDeal(result);
      setTotalPage(result.length);
      const startIndex = (currentPage - 1) * limit;
      const kq = result.slice(startIndex, startIndex + limit);
      setProducsNoDeal(kq);
    } else {
      setProducsNoDeal(allProductsNoDeal);
      setTotalPage(allProductsNoDeal.length);
      const startIndex = (currentPage - 1) * limit;
      const kq = allProductsNoDeal.slice(startIndex, startIndex + limit);
      setProducsNoDeal(kq);
    }
  }, [activeCategory]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * limit;
    const result = allProductsNoDeal.slice(startIndex, startIndex + limit);
    setProducsNoDeal(result);
  }, [currentPage]);

  useEffect(() => {
    if (localStorage.getItem('list-product-order')) {
      const str = localStorage.getItem('list-product-order');
      if (typeof str === 'string') {
        const result = JSON.parse(str);
        setProductsOrder(result.data);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="mb-10 px-[30px]9">
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          {productsOrder.length > 0 ? (
            <OrderProductModal
              setCount={setCount}
              setIsOpenModal={setIsOpenModal}
              setProductsOrder={setProductsOrder}
              productsOrder={productsOrder}
              count={count}
            />
          ) : (
            <EmptyOrderModal setIsOpenModal={setIsOpenModal} />
          )}
        </Modal>
      )}
      <Header />
      <Content
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
        getProducts={getProducts}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        setCount={setCount}
        count={count}
        setProductsOrder={setProductsOrder}
        productsOrder={productsOrder}
        products={productsNoDeal}
        productsDeal={productsDeal}
        setIsOpenModal={setIsOpenModal}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
