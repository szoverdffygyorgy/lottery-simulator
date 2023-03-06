import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './containers/app/app';
import StateProvider from './state/state-provider';
import GlobalStyle from './theme/global-style';
import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <StateProvider>
        <App />
      </StateProvider>
    </ThemeProvider>
  </StrictMode>
);
