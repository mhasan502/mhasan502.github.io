import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import './index.css'
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from '@mantine/core';

const poppinsFont = createTheme({
  fontFamily: 'Poppins, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={poppinsFont}>
      <AppRouter/>
    </MantineProvider>
  </React.StrictMode>,
);
