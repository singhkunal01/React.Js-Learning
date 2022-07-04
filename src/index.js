import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));/* AFter rendering it goes into root and then fetched by main index.html file */
root.render(
  <React.StrictMode>
    <App />
    {/* this app is the app.js file which is rendered in this index.js */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* This is the entry point of whole react app */