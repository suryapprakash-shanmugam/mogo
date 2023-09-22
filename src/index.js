//import mantine packages
import { MantineProvider } from '@mantine/core';

//import mantine modals packages
import { ModalsProvider } from '@mantine/modals';

//import react packages
import React from 'react';

//import reactdom packages
import ReactDOM from 'react-dom/client';

//import react router packages
import { HashRouter } from "react-router-dom"

//import App
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MantineProvider>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </MantineProvider>
    </HashRouter>
  </React.StrictMode>
);