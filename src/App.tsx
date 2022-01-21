import { GlobalColors } from './styles/settings/colors';
import { GlobalReset } from './styles/generic/reset';
import { GlobalStyle } from './styles/elements/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

export const App = () => {
  return (
    <>
      <GlobalColors />
      <GlobalReset />
      <GlobalStyle />

      <Header />
      <Dashboard />
    </>
  );
};
