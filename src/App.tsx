import React from 'react';
import GlobalStyles from "./styles/global";
import theme from '../src/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import DataProvider from './utils/dataContext';
import TemplateProvider from './utils/templateContext';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <DataProvider>
          <TemplateProvider>
            <Routes /> 
          </TemplateProvider>
        </DataProvider>
    </BrowserRouter>
  );
}

export default App;
