import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.querySelector('#root')
);