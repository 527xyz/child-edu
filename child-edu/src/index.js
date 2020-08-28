import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/base.css'
import './assets/js/font'
import Nav from './components/router';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/plugins/redux/redux'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
    </Router>
  </Provider>,
  document.getElementById('root')
);
