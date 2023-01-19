import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Provider } from "react-redux";
import { createStore } from "redux";// подключаем store
import reducer from 'reducer';

const store = createStore(reducer);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>
);
