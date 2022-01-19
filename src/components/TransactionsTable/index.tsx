import { Container } from './styles';

export const TransactionsTable = () => (
  <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PokeLab</td>
          <td className="income">R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>12/12/2021</td>
        </tr>
        <tr>
          <td>Gym</td>
          <td className="outcome">- R$1.000,00</td>
          <td>Health</td>
          <td>11/12/2021</td>
        </tr>
      </tbody>
    </table>
  </Container>
);
