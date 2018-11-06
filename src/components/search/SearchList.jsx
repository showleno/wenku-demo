import React, { Component } from 'react';
export default class SearchList extends Component {
    render () {
        return (
            <tbody>
                    { this.props.data.length === 0 ?  <tr className="lazyload"><td className="donghua">加载中</td></tr> :
                    this.props.data.map((item,index) => (
                        <tr key={index}>
                            <td><i className="_doc"></i>
                            <a href="/" className="_link" title={'上传于'+item.time}>{item.name}</a>
                            <u>{item.type}</u></td>
                            <td>{item.views}次</td>
                            <td>{item.downloadCount}次</td>
                            <td className="_alignright"><a href="/" title="收藏" className="_btn collect">&nbsp;</a></td>
                            <td><a href="/" title="下载" className="_btn download">&nbsp;</a></td>
                        </tr>
                    )) }
            </tbody>
        )
    }
}