import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//app은 component
//Javascript와 html사이의 이런 조합을 JSX라고 부름
//Reactapplication은 하나의 component밖에 render하지 않음
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

