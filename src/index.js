import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
