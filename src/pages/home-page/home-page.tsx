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

const HomePage = () => {
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
  const limit = 6;

  const ref = collection(db, 'products');

  const getProducts = useCallback(async () => {
    try {
      const data = await getDocs(ref);
      const products = data.docs.map((doc) => doc.data());
      if (products) {
        setTotalPage(products.length);
        let deals = [];
        let noDeal = [];
        for (let item of products) {
          if (item.deal > 0) {
            deals.push(item);
          } else {
            noDeal.push(item);
          }
        }
        setAllProductsNoDeal(noDeal);
        setProductsDeal(deals);
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
    const startIndex = (currentPage - 1) * limit;
    const result = allProductsNoDeal.slice(startIndex, startIndex + limit);
    setProducsNoDeal(result);
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mb-10 px-[30px]9">
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          {/* <EmptyOrderModal setIsOpenModal={setIsOpenModal} /> */}
          <OrderProductModal />
        </Modal>
      )}
      <Header />
      <Content
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
