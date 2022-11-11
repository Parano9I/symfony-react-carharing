import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import browserRouter from './routes/index';
import { Provider } from 'react-redux';
import { persister, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <RouterProvider router={browserRouter} />
    </PersistGate>
  </Provider>
);

reportWebVitals();
