import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import { Router } from './shared';

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>

        <GlobalStyles />
    </ThemeProvider>
  );
}
