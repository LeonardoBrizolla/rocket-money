import { GlobalColors } from './styles/settings/colors';
import { GlobalReset } from './styles/generic/reset';
import { GlobalStyle } from './styles/elements/global';
import { HeaderRocket } from './components/HeaderRocket';
import { DashboardRocket } from './components/DashboardRocket';

export const App = () => {
  return (
    <>
      <GlobalColors />
      <GlobalReset />
      <GlobalStyle />

      <HeaderRocket />
      <DashboardRocket />
    </>
  );
};
