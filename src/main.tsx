import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import store from 'store';
import { Provider } from 'react-redux';

import Router from 'core/routes/Router';
import { RouterProvider } from 'react-router-dom';

import 'common/languages/locales/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={Router} />
      </Provider>
   </React.StrictMode>,
);
