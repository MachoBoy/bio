import ReactModal from 'react-modal';

interface Props {
  children: JSX.Element;
  isOpen: boolean;
  closeModal: Function;
}

const style = {
  overlay: { backgroundColor: 'rgba(0,0,1,0.5)' },
  content: {
    width: '70vw',
    height: '50vh',
    inset: 0,
    margin: 'auto',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    border: 'none',
  },
};

const Modal = ({ children, isOpen, closeModal }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={style}
      onRequestClose={() => closeModal()}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
