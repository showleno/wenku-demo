import React, { Component } from 'react';
import { getNewShare } from '../../get_api';
import Loading from '../loading/loading';
import './newShare.scss';

class NewShare extends Component {
    state = {
        data:[]
    }
    componentDidMount() {
        this.getJsonData();
    }
    // 把参数绑定到  构造函数的state里面
    getJsonData = () => {
        const _this=this;
        const data = getNewShare();
        data.then(function (resout) {
            _this.setState({data:resout})
        })
    }
    
    render () {
        let list = this.state.data.map((item, index) => (
                <div className="n-list" key={index}>
                <div className="list-top">
                    <div className="im">
                        <a rel="noopener noreferrer" href={item.url}>
                            <img src={"https://img1.53wy.com//library/logo/"+item.img} alt=""/>
                        </a>
                    </div>
                    <div className="list-func">
                        <a href="javascript:;" className="list-icon u-collect"></a><a href="javascript:;" className="list-icon u-download"></a>
                    </div>
                </div>
                <div className="list-title"><a rel="noopener noreferrer" href={item.url}>{item.title}</a></div>
                <div className="list-descr">
                    <div className="sta"><i className="lib-type word"></i>{item.size}</div>
                </div>
            </div>
        ))
        return (
            <div className="newShare">
                    {/* <!-- 最新分享 --> */}
                    <section className="zuiXinFenXiang">
                        <div className="W">
                            <h1><i className="I_30 I_zuixinfenxiang"></i> 最新分享</h1>
                            <div className="Docs">
                                <div className="doc_box">
                                    <div className="n-lists _clearfix" >
                                        { this.state.data.length === 0 ? <Loading content={"正在加载中..."}/> : list }
                                    </div>
                                </div>

                                {/* <!-- 更多 --> */}
                                <div className="more">
                                    <a href="/"><em>点击查看更多</em><i className="fa fa-angle-right"></i></a>
                                </div>
                        </div>
                    </div>
                    </section>
            </div>
        )
    }
}
export default NewShare;