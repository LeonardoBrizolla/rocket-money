import { CardRocket } from '../CardRocket';

import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const SummaryRocket = () => (
  <Container>
    <CardRocket content="R$ 1.500,00" src={incomeImg} labelName="Entrada" />
    <CardRocket content="- R$ 500,00" src={outcomeImg} labelName="Saída" />
    <CardRocket
      content="R$ 1.000,00"
      src={totalImg}
      className="-total"
      labelName="Total"
    />
  </Container>
);
