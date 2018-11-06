import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/index';
import { changeIsLogin } from './redux/actions/index';

let checkUser = 'http://www.weinihaigou.com/user/checkUser.shtml';

// 先获取用户登录状态
axios.post(checkUser).then( ( data ) => {
    store.dispatch( changeIsLogin(data.data.flag) );
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
