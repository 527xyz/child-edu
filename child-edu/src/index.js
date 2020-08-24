import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/base.css'
import './assets/js/font'
import Nav from './components/router';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Nav/>
  </Router>,
  document.getElementById('root')
);
