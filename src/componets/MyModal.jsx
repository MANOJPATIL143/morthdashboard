import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MyModal = ({ isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <h2>Modal Content</h2>
    <p>This is the content of the modal.</p>
    <button onClick={closeModal}>Close Modal</button>
  </Modal>
);

export default MyModal;