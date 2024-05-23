import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {registerMicroApps, start} from "qiankun";
import microApps from "./subApp";

const root = ReactDOM.createRoot(document.getElementById('root-main'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerMicroApps(microApps)

start()
