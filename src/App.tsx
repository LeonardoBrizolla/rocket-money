import Modal from 'react-modal';

import { GlobalColors } from './styles/settings/colors';
import { GlobalReset } from './styles/generic/reset';
import { GlobalStyle } from './styles/elements/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export const App = () => {
  const [isNewTransactionModal, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () =>
    setIsNewTransactionModalOpen(true);

  const handleCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen(false);

  return (
    <>
      <GlobalColors />
      <GlobalReset />
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
};
