import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./Components/Board/Board";
import Layout from "./Layout/Layout";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Layout>
          <Board/>
      </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
