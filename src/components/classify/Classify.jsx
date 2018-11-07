import React, { Component } from 'react';
import store from '../../redux/store/index';
import './classify.scss';

class Classify extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isLogin : store.getState().reducer.isLogin
        }
        // 判断是否登录
        console.log(store.getState().reducer.isLogin, 'classify')
    }
    render () {
        return (
            <div className="classify">
                {/* <!-- 分类浏览 --> */}
                <section className="fenLeiLiuLan">
                    <h1>分类浏览</h1>
                    <div className="W">
                    <ul className="_category _clearfix">
                        <li><a href="/"><i className="I_50 I_qygl"></i><span>企业管理</span></a></li>
                        <li><a href="/"><i className="I_50 I_rlzy"></i><span>人力资源</span></a></li>
                        <li><a href="/"><i className="I_50 I_cwsj"></i><span>财务审计</span></a></li>
                        <li><a href="/"><i className="I_50 I_xxh"></i><span>信息化</span></a></li>
                        <li><a href="/"><i className="I_50 I_hlw"></i><span>互联网</span></a></li>
                        <li><a href="/"><i className="I_50 I_gy40"></i><span>工业4.0</span></a></li>
                        <li><a href="/"><i className="I_50 I_falv"></i><span>法律</span></a></li>
                    </ul>
                    {
                        this.state.isLogin ? <div className="_use _clearfix">
                            <ul className="_user">
                            <li className="_wdsg"><a href="/"><strong>我的书柜</strong><span><i className="I_30 I_wdsg"></i>收藏 345 本</span></a></li>
                            <li className="_wddy"><a href="/"><strong>我的订阅</strong><span><i className="I_30 I_wddy"></i>已更新 25 篇</span></a></li>
                            <li className="_wdwk"><a href="/"><strong>我的文库</strong><span><i className="I_30 I_wdwk"></i>请先登录</span></a></li>
                            <li className="_stwk"><a href="/"><strong>社团文库</strong><span><i className="I_30 I_stwk"></i>您还未加入社团</span></a></li>
                            </ul>
                        </div> : ''
                    }
                    </div>
                </section>
            </div>
        )
    }
}
export default Classify;