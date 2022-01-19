import { GlobalColors } from './styles/settings/colors';
import { GlobalReset } from './styles/generic/reset';
import { GlobalStyle } from './styles/elements/global';
import { HeaderRocket } from './components/HeaderRocket';

import { LabelRocket } from './objects/LabelRocket';
import { IconRocket } from './objects/IconRocket';
import { TotalRocket } from './objects/TotalRocket';

export const App = () => {
  return (
    <>
      <GlobalColors />
      <GlobalReset />
      <GlobalStyle />

      <HeaderRocket />
      <LabelRocket />
      <IconRocket />
      <TotalRocket />
    </>
  );
};
