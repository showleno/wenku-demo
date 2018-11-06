import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="container _clearfix">

                    {/* <!-- register and login --> */}
                    <div className="m-register hidden">
                        <a href="/" className="register">注册</a>
                        <a href="/" className="login">登录</a>
                    </div>

                    {/* <!-- logined --> */}
                    <div className="m-logined">
                        <a href="/"><span className="user"><img src="./images/transparent.png" alt="" /></span> 用户名</a><em>|</em>
                        <a href="/"><i className="fa fa-gift"></i>签到</a><em>|</em>
                        <a href="/">消息 <u className="dot"></u></a><em>|</em>
                        <a href="#managerMine" data-toggle="dropdown">管理我的 <i className="fa fa-caret-down"></i></a>
                        <ul className="mine hidden" id="managerMine">
                            <li><a href="/">我的文库</a></li>
                            <li><a href="/">社团文库</a></li>
                            <li><a href="/">我的书库</a></li>
                            <li><a href="/">我的订阅</a></li>
                            <li><a href="/">平台中心</a></li>
                            <li><a href="/">退出登录</a></li>
                        </ul>
                    </div>

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