import React from 'react';
import GlobalStyles from "./styles/global";
import theme from '../src/styles/theme';

import { Login } from './pages/index'

function App() {
  return (
    <section>
      <GlobalStyles />
      <Login>
      </Login>
    </section>
  );
}

export default App;
