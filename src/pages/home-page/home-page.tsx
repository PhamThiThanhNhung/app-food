import { useState, useEffect } from 'react';
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
  const [products, setProducs] = useState<ProductType[] | DocumentData[]>([]);

  const ref = collection(db, 'products');

  const getProducts = async () => {
    try {
      const data = await getDocs(ref);
      const products = data.docs.map((doc) => doc.data());
      if (products) {
        setProducs(products);
      } else {
        setProducs([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <Content products={products} setIsOpenModal={setIsOpenModal} />
      <Footer />
    </div>
  );
};

export default HomePage;
