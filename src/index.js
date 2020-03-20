import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {carReducer} from './reducers/carReducer';
import 'bulma/css/bulma.css';
import './styles.scss';
const store = createStore(carReducer);


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>,
    rootElement
  );
