import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './containers/AppRouter';
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
   document.getElementById("root")
);

