import { GlobalColors } from './styles/settings/colors';
import { GlobalReset } from './styles/generic/reset';
import { GlobalStyle } from './styles/elements/global';

export const App = () => {
  return (
    <div className="App">
      <GlobalColors />
      <GlobalReset />
      <GlobalStyle />

      <h1>Hi</h1>
    </div>
  );
};
