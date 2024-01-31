import React from 'react'
import ReactDOM from 'react-dom/client'
import {createTheme, MantineProvider} from '@mantine/core';
import './styles/index.css'
import Carouselify from "./components/Carousel.jsx";
import {HashRouter} from "react-router-dom";

const customTheme = createTheme({
  fontFamily: 'Rubik, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={customTheme}>
      <HashRouter>
        <Carouselify/>
      </HashRouter>
    </MantineProvider>
  </React.StrictMode>,
);
