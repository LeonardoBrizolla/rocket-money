import { SummaryRocket } from '../SummaryRocket';
import { TransactionsTable } from '../TransactionsTable';

import { Container } from './styles';

export const DashboardRocket = () => (
  <Container>
    <SummaryRocket />
    <TransactionsTable />
  </Container>
);
