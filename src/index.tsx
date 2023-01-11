import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
// service worker goes here
import {ServiceWorker__initialize , Kuki__initialize} from './components/services';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
        <App />
    </HashRouter>
  </React.StrictMode>
);

// call the service workerkk here
ServiceWorker__initialize()
// call the kuki here
Kuki__initialize()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
