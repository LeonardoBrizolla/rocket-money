import Modal from 'react-modal';

import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Container>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h1>Hello Modal</h1>
      </Modal>
    </Container>
  );
};
