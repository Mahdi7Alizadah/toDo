import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'

const stateha=[
  {
    id: 1,
    text: 'Tasck 1',
    completed: false
  },
  {
    id: 2,
    text: 'Tasck 2',
    completed: false
  },
  {
    id: 3,
    text: 'Tasck 3',
    completed: true
  }

]

const todos = (state= stateha, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return[
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>{
        if(todo.id !== action.id){
          return todo
        }
        return {...todo, completed: !todo.completed}
      })
    default:
      return state;
  }
}

const store = createStore(todos)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
