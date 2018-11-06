import React, { Component } from 'react';

export default class Detail extends Component {
    render () {
        return (
            <div className="searchPage">
                <div className="subPageHeader">
                    <div className="container _clearfix">
                        
                        <div className="head _clearfix">
                            <div className="upload">
                                <a href="/">
                                    <input type="file" />
                                    <i className="fa fa-upload"></i>
                                    <em>上传文档</em>
                                </a>
                            </div>
                            <div className="search">
                                <form action="">
                                    <div className="f-control">
                                        <a href="javascript:;" onClick={this.getList} className="search-btn"><i className="fa fa-search"></i></a>
                                        <div className="search-ipt">
                                            <input type="text" placeholder="输入要搜索的关键字"  value={this.state.name} onChange={this.onChange} onKeyDown={this.handleKeyEnter} />
                                            <i className={this.state.clearBtnIsShow ? 'show fa fa-times-circle': 'hidden fa-times-circle'} onClick={this.clearInputText} ></i>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="logo">
                                <a href="/" className="big-logo">
                                    <img src="../images/logo.png" alt="LOGO" />
                                </a>
                                <a href="/wk" className="sml-logo">
                                    文库
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}