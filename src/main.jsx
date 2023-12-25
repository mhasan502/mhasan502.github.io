import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import './index.css'
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from '@mantine/core';

const customTheme = createTheme({
  fontFamily: 'Rubik, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={customTheme}>
      <Router/>
    </MantineProvider>
  </React.StrictMode>,
);
