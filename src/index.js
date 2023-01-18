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
export const addINC = () => {
  return {
    type: 'INC',
    payload: 'value+1'
  }
}
export const addDEC = () => {
  return {
    type: 'DEC',
    payload: 'value-1'
  }
}
export const clickRND = () => {
  const rundomValue = Math.floor(Math.random() * 10)
  return {
    type: 'RND',
    payload: rundomValue
  }
}





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
