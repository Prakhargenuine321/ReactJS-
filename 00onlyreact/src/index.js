import React from 'react';
import ReactDOM from 'react-dom/client'; //It is an implementation of an 'react' over web, 
//as 'react-native' is implementation of 'react' over mobile.
import App from './App';

//"ReactDOM" creates it's own DOM that is known as "virtual-DOM".
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> is an property isko hata do toh bhi koi dikkat nahi hogi.
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
