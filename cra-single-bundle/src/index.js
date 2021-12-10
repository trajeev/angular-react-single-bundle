import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
// import store from './redux/store';
import './index.css';
import {ReactElement} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

customElements.define('react-element', ReactElement)

ReactDOM.render(
  // <Provider store = {store}>
    <BrowserRouter>
      <React.StrictMode>
        {/* <App /> */}
        <react-element></react-element>
      </React.StrictMode>
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
