import { ButtonRocket } from '../../objects/ButtonRocket';
import { Logo } from '../../objects/Logo';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo />
        <ButtonRocket
          content="Nova Transação"
          type="button"
          onClick={onOpenNewTransactionModal}
        />
      </Content>
    </Container>
  );
};
