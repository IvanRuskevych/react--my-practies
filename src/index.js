import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="/react--my-practice">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
