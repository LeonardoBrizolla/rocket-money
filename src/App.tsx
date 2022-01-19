import { GlobalColors } from './styles/settings/colors';
import { GlobalReset } from './styles/generic/reset';
import { GlobalStyle } from './styles/elements/global';
import { HeaderRocket } from './components/HeaderRocket';

export const App = () => {
  return (
    <>
      <GlobalColors />
      <GlobalReset />
      <GlobalStyle />

      <HeaderRocket />
    </>
  );
};
