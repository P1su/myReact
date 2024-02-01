import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//여기에 적힌대로 동작한다.
//App태그는 App.js에서 불러온 것임
//전역적인 설정들이 들어가 있음

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//아이디 값이 root인 태그로 렌더링
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
