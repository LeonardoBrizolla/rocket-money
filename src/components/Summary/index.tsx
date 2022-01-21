import { Card } from '../Card';

import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary = () => (
  <Container>
    <Card content="R$ 1.500,00" src={incomeImg} labelName="Entradas" />
    <Card content="- R$ 500,00" src={outcomeImg} labelName="Saídas" />
    <Card
      content="R$ 1.000,00"
      src={totalImg}
      className="-total"
      labelName="Total"
    />
  </Container>
);
