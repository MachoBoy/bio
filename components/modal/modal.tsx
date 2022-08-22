import ClientOnlyPortal from './clientOnlyPortal';
import { motion } from 'framer-motion';
interface Props {
  children: JSX.Element;
  closeModal: Function;
}

const Modal = ({ children, closeModal }: Props) => {
  return (
    <>
      <ClientOnlyPortal selector='#modal'>
        <div className='fixed inset-0 z-40'>
          <div
            className='backdrop absolute bg-black/50 inset-0 z-40'
            onClick={() => closeModal()}
          ></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='modal z-40 bg-white absolute inset-[10%] rounded-2xl'
          >
            {children}
          </motion.div>
        </div>
      </ClientOnlyPortal>
    </>
  );
};

export default Modal;
