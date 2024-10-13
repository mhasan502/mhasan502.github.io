import React from 'react'
import ReactDOM from 'react-dom/client'
import {createTheme, MantineProvider} from '@mantine/core';
import './styles/Index.css'
import {HashRouter} from 'react-router-dom';
import Router from './Router.jsx';

const customTheme = createTheme({
  fontFamily: 'Rubik, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={customTheme}>
      <HashRouter>
        <Router/>
      </HashRouter>
    </MantineProvider>
  </React.StrictMode>,
);
