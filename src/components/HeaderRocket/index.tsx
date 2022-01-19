import { ButtonRocket } from '../../objects/ButtonRocket';
import { LogoRocket } from '../../objects/LogoRocket';

import { Container, Content } from './styles';

export const HeaderRocket = () => (
  <Container>
    <Content>
      <LogoRocket />
      <ButtonRocket />
    </Content>
  </Container>
);
