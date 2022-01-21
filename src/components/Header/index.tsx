import { ButtonRocket } from '../../objects/ButtonRocket';
import { Logo } from '../../objects/Logo';

import { Container, Content } from './styles';

export const Header = () => (
  <Container>
    <Content>
      <Logo />
      <ButtonRocket content="Nova Transação" />
    </Content>
  </Container>
);
