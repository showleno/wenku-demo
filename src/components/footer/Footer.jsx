import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="_categories">
                    <div className="W">
                        <ul className="_clearfix">
                            <li><a href="/"><i className="I_easy I_easy_00"></i><span>企业管理</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_01"></i><span>人力资源</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_02"></i><span>企业文化</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_03"></i><span>法律</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_04"></i><span>财会</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_05"></i><span>国家政策</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_06"></i><span>互联网</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_07"></i><span>信息化</span></a></li>
                            <li><a href="/"><i className="I_easy I_easy_08"></i><span>汽车</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="_links">
                    <div className="W">
                        <a href="/">关于我们</a> |
                        <a href="/">帮助中心</a> |
                        <a href="/">诚聘英才</a> |
                        <a href="/">联系我们</a> |
                        <a href="/">网站合作</a> |
                        <a href="/">法律声明</a> |
                        <a href="/">用户反馈</a> |
                        <a href="/">隐私政策</a> 

                        <span><i className="lib-icon"></i>客服电话：400-0000-0000</span>
                    </div>
                </div>
                <div className="_copyright _clearfix">
                    <div className="W">
                        <a href="/" className="logo"><img src="../images/logo.png" alt="" /></a>
                        <div className="_margin">
                        <p>增值电信业务经营许可证： 赣B2-20110446  © 2016-2017 53wy.com 网上委员版权所有</p>
                        <p>大委员文库为用户免费分享产生，若发现您的权利被侵害，请点此 [申诉] ，我们尽快处理</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;