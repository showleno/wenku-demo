import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
// 引入react-redux配置
import { Provider } from 'react-redux';
// 引入react-store配置
import store from './redux/store/index';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { changeIsLogin } from './redux/actions/index';

let checkUser = 'https://www.easy-mock.com/mock/5bd69e55e4a7377be9531536/example/login?name=';

// 先获取用户登录状态
axios.get(checkUser+'leon').then( ( data ) => {
    console.log(data.data.data)
    store.dispatch( changeIsLogin(data.data.data) );
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
