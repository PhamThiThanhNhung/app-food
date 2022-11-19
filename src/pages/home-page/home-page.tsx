import { useState } from 'react';
import Modal from '../../components/modal/modal';
import Content from '../../layouts/Content/Content';
import Footer from '../../layouts/footer/footer';
import Header from '../../layouts/header/header';
import EmptyOrderModal from '../../layouts/order-modal/empty-order-modal';
import OrderProductModal from '../../layouts/order-modal/product-order-modal';

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="mb-10 px-[30px]9">
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          {/* <EmptyOrderModal setIsOpenModal={setIsOpenModal} /> */}
          <OrderProductModal />
        </Modal>
      )}
      <Header />
      <Content setIsOpenModal={setIsOpenModal} />
      <Footer />
    </div>
  );
};

export default HomePage;
