import React, { Component } from 'react';
import store from '../../redux/store/index';
import './Search_head.scss';

class Search_head extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            isLogin : store.getState().reducer.isLogin
        }
        console.log( store.getState().reducer.isLogin, 'search')
    }
    goSearch = () =>  {
        let query = this.state.name;
        this.props.prop.history.push({ pathname:'/wk/search',state:{name : query } })
    }
    clearInputText = () => {
        this.setState ({
            name: ''
        })
    }
    //处理Enter键
    handleKeyEnter = (ev) => {
        let keyCode = ev.keyCode;
        if (keyCode === 13 ) {
            this.getList();
            ev.preventDefault();
        }
    }
    searchOnChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    render () {
        return (
            <div className="search_head">
                {/*search*/}
                <div className="bottom">
                    <div className="container _clearfix">
                        
                        <div className="head _clearfix">
                            <div className="upload">
                                <a href="/login">
                                {
                                    this.state.isLogin  ? <input type="file" /> : ''
                                }
                                    <i className="fa fa-upload"></i>
                                    <em>上传文档</em>
                                </a>
                            </div>
                            
                            <div className="logo">
                                <a href="/" className="big-logo">
                                    <img src="images/logo.png" alt="LOGO" />
                                </a>
                                <a href="/" className="sml-logo">
                                    文库
                                </a>
                            </div>

                        </div>
                        
                        <h1>专业文库分享平台</h1>

                        <div className="searchBox">
                            
                            <div className="search">
                                <form action="">
                                    <div className="f-control _clearfix">
                                    {/* <Link to={{ pathname: '/wk/search' , state : { name: this.state.name  }}} className="search-btn" ><i className="fa fa-search"></i></Link> */}
                                    <a href="javascript:;" onClick={this.goSearch} className="search-btn"><i className="fa fa-search"></i></a>
                                    <div className="search-ipt">
                                        <input type="text"  onChange={this.searchOnChange} onKeyDown={this.handleKeyEnter} placeholder="输入要搜索的关键字" />
                                        <i className="fa fa-times-circle" onClick={this.clearInputText}></i>
                                    </div>
                                    </div>
                                </form>
                            </div>

                            <div className="hot-word">
                                <div className="hot-wrap _clearfix">
                                    <a href="/">学雷锋先进个人材料</a>
                                    <a href="/">分级基金折溢价套利</a>
                                    <a href="/">四年级班级读书计划</a>
                                    <a href="/">山西省社科联</a>
                                    <a href="/">资产评估综合测评</a>
                                    <a href="/">操作系统</a>
                                    <a href="/">数据库</a>
                                    <a href="/">信息化</a>
                                    <a href="/">服务器</a>
                                    <a href="/">考研真题及答案</a>
                                    <a href="/">国庆节活动策划方案</a>
                                    <a href="/">现代简约建筑风格</a>
                                    <a href="/">职业道德核心</a>
                                    <a href="/">农村基层党建工作</a>
                                    <a href="/">网络通信</a>
                                    <a href="/">汽车营销</a>
                                    <a href="/">安防监控</a>
                                    <a href="/">虚拟化</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Search_head;