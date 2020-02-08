import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './css/menu.scss';
import './css/viewSpending.scss';
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import ViewSpending from './components/ViewSpending.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <Header/>
    <NavBar/>
    <ViewSpending/>
  </div>,
  document.getElementById('root'));
  serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
