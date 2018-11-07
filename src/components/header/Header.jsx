import React, { Component } from 'react';
import store from '../../redux/store/index';
import { changeIsLogin } from '../../redux/actions/index';
import './Header.scss';

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isShow: false,
            isLogin : store.getState().reducer.isLogin
        }
        // 判断是否登录
        console.log(store.getState().reducer.isLogin, 'header')
    }
    loginOut = (ev) => {
        ev.preventDefault();
        // 先获取用户登录状态
        store.dispatch( changeIsLogin(false) );
    }
    dropDown = (ev) => {
        ev.preventDefault();
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render () {
        return (
            <div className="header">
                <div className="container _clearfix">

                    {
                        this.state.isLogin ? 
                        <div className="m-logined">
                            <a href="/"><span className="user"><img src={this.state.isLogin.avatar} alt="" /></span> {this.state.isLogin.cname}</a><em>|</em>
                            <a href="/"><i className="fa fa-gift"></i>签到</a><em>|</em>
                            <a href="/">消息 <u className="dot"></u></a><em>|</em>
                            <a href="/" data-toggle="dropdown" onClick={this.dropDown}>管理我的 <i className="fa fa-caret-down"></i></a>
                            <ul className={this.state.isShow ? 'mine': "mine hidden"} id="managerMine">
                                <li><a href="/">我的文库</a></li>
                                <li><a href="/">社团文库</a></li>
                                <li><a href="/">我的书库</a></li>
                                <li><a href="/">我的订阅</a></li>
                                <li><a href="/">平台中心</a></li>
                                <li><a href="/" onClick={this.loginOut}>退出登录</a></li>
                            </ul>
                        </div>
                        :
                        <div className="m-register">
                            <a href="/" className="register">注册</a>
                            <a href="/" className="login">登录</a>
                        </div> 
                        
                    }
                    

                    

                    {/* <!-- top-menu --> */}
                    <div className="m-menu">
                        <ul>
                            <li><a href="/">回大委员</a></li>
                            <li className="active"><a href="/">首页</a></li>
                            <li>
                                <a href="#category" data-toggle="dropdown">分类  <i className="fa fa-caret-down"></i></a>
                            </li>
                            <li><a href="/">社团文库</a></li>
                            <li><a href="/">近期热书</a></li>
                            <li><a href="/">排行榜</a></li>
                            <li><a href="/">专题</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
export default Header;