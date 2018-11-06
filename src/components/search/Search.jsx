import React, { Component } from 'react';
import SearchResult from './SearchResult';
import { getSearchResult } from '../../get_api';

class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name : '',
            list: [],
            clearBtnIsShow: false,
            sortCategory:[],
            // 请求节流
            throttle: false
        }
    }
    componentDidMount () {
        this.setState({
            name: this.props.prop.location.state.name
        })
        this.sendAjax(this.props.prop.location.state.name);
    }
    sendAjax = (query) => {
        const data = getSearchResult(query);
        const _this = this;

        data.then(function(resout){
            if ( resout ) {
                _this.setState({
                    list: []
                })
                let result = resout.list ;
                result.map(function(item,index) {
                    _this.state.list.push(item)
                    if ( _this.state.sortCategory.indexOf(item.sortName) < 0 ) {
                        _this.state.sortCategory.push(item.sortName)
                    }
                    return index
                })
            }else {
                _this.setState({
                    list: null
                })
            }
            _this.setState({
                throttle: false
            })
        })
    }
    getList = () => {
        let query = this.state.name;
        if ( !this.state.throttle) {
            alert('不要重复搜索')
        }else {
            this.sendAjax(query);
        }
    }
    //处理Enter键
    handleKeyEnter = (ev) => {
        let keyCode = ev.keyCode;
        if (keyCode === 13 ) {
            this.getList();
            ev.preventDefault();
        }
    }
    clearInputText = () => {
        this.setState ({
            name: ''
        })
    }
    onChange = (ev) => {
        let query = ev.target.value;
        if ( query.length > 0 ) { 
            this.setState ({
                name: query,
                clearBtnIsShow: true,
                throttle: true
            })
        }else {
            this.setState ({
                name: query,
                clearBtnIsShow: false,
                throttle: false
            })
        }
        
    }
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
                <SearchResult data={this.state.list} name={this.state.name} sortCategory={this.state.sortCategory}/>
            </div>
        )
    }
}
export default Search;