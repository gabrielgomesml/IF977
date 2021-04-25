import React from 'react';
import GlobalStyles from "./styles/global";
import theme from '../src/styles/theme';
import { BrowserRouter } from 'react-router-dom';

import { Login } from './pages/index'

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Routes /> 
    </BrowserRouter>
  );
}

export default App;
