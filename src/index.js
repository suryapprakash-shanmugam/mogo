//import mantine packages
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

//import react packages
import React from 'react';

//import reactdom packages
import ReactDOM from 'react-dom/client';

//import react router packages
import { HashRouter } from "react-router-dom"

//import App
import App from './App';

// Redux State Handler
import { Provider } from 'react-redux';
import { store } from './StateHandler/Store/ReduxStore';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <ModalsProvider>
            <Provider store={store}>
              <Notifications position="top-right" zIndex={12346} autoClose={2200} withBorder />
              <App />
            </Provider>
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);