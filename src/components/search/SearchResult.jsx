import React, { Component } from 'react';
import SearchList from './SearchList';
import './searchResult.scss';


class SearchResult extends Component {
    componentDidMount () {
        console.log(this.props.tpl)
    }
    render () {
        let noneContent = "<td colSpan=\"5\"><h1>抱歉，没有找到你要的内容！</h1></div></td>";
        
        return (
            <main className="main category">
                <div className="W">
                    <div className="_middle">
                        <div className="layer">
                            <aside className="aside">
                                <div className="aside-box jiansuo">
                                    <div className="_w">
                                        <div className="_head">
                                            搜索筛选
                                        </div>
                                        <div className="_body">
                                            
                                            <a href="/" className="on">全部<em><font color="red">20</font>结果</em></a>
                                            <a href="/">企业管理<em><font color="red">20</font>结果</em></a>
                                            <a href="/">企业文化<em><font color="red">20</font>结果</em></a>
                                            <a href="/">法律<em><font color="red">20</font>结果</em></a>
                                            <a href="/">财会<em><font color="red">20</font>结果</em></a>
                                            <a href="/">国家政策<em><font color="red">20</font>结果</em></a>
                                            <a href="/">互联网<em><font color="red">20</font>结果</em></a>
                                            <a href="/">信息化<em><font color="red">20</font>结果</em></a>
                                            <a href="/">汽车<em><font color="red">20</font>结果</em></a>
                                
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            <section className="content">
                                {/* <!-- 文字列表 --> */}
                                <div className="write_box" id="writeLists">
                                    <h1><u>|</u>搜索有关 <em>{this.props.name}</em> 结果显示</h1>
                                    <div className="lib-content">
                                        <table className="table" cellPadding="0" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>文件</th>
                                                    <th>浏览次数</th>
                                                    <th>下载次数</th>
                                                    <th className="_alignright">收藏</th>
                                                    <th>下载</th>
                                                </tr>
                                            </thead>
                                            {this.props.tpl === null ? <tr id="nocontent" dangerouslySetInnerHTML = {{ __html:  noneContent  }}></tr> : <SearchList tpl={this.props.tpl} /> }
                                        </table>
                                    </div>
                                </div>
                                

                                {/* <!-- paginate --> */}
                                <div className="m-paginate">
                                    <div className="paginate">
                                        
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default SearchResult;