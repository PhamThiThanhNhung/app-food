import { useState } from 'react';
import Modal from '../../components/modal/modal';
import Content from '../../layouts/Content/Content';
import Footer from '../../layouts/footer/footer';
import Header from '../../layouts/header/header';
import OrderModal from '../../layouts/order-modal/order-modal';

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="mb-10 px-[30px]9">
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <OrderModal setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
      <Header />
      <Content setIsOpenModal={setIsOpenModal} />
      <Footer />
    </div>
  );
};

export default HomePage;
