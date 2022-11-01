import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import browserRouter from './routes/index';
import { Provider } from 'react-redux';
import { store } from './store/index';
import Header from './components/header/header.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={browserRouter} />
  </Provider>
);

reportWebVitals();
