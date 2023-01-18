import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Provider } from "react-redux";
// import { store } from "./redux/store";

import { createStore } from "redux";// подключаем store
const initialState = 0;// началье значение

//reducer передаем (state = initialState, action = { type: 'INC' } )
// если action.type === INC, то наш state увеличиваем на 1)
//Reducer, только чистая функция
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state * action.payload

    default: return state 
  }
  
  
}



// создание store
const store = createStore(reducer);

// const updateValue = () => {

// }
store.subscribe(() => {
  console.log(store.getState());// получает значение state
})
//actions
export const addINC = () => ({ type: 'INC', payload: 'valueINC' });
export const addDEC = () => ({ type: 'DEC', payload: 'valueDEC' });
export const clickRND = (rundomValue) => ({ type: 'RND', payload: rundomValue });







//Action
// let state = reducer(initialState, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// state = reducer(state, { type: 'INC' });

// console.log(state)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>
);
