import { Dispatch, ReactNode, SetStateAction } from 'react';

type IProps = {
  children: ReactNode;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
};

const Modal: React.FC<IProps> = ({ children, setIsOpenModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-[999] h-[100vh] transition-all ease-in-out duration-150">
      <a
        className="fixed top-0 left-0 w-full z-[1000] h-[100vh] bg-black opacity-80"
        onClick={() => setIsOpenModal(false)}
      ></a>
      <div className="z-[999999] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
