import React, { Component } from 'react';
import Loading from '../loading/loading';
export default class SearchList extends Component {
    render () {
        return (
            <tbody>
                    { this.props.tpl.length === 0 ?  <Loading content={'加载中' }/> :
                    this.props.tpl.map((item) => (
                        <tr key={item.id}>
                            <td><i className="_doc"></i>
                            <a href="/" className="_link" title={'上传于'+item.time}>{item.name}</a>
                            <u>{item.type}</u></td>
                            <td>{item.views}次</td>
                            <td>{item.downloadCount}次</td>
                            <td className="_alignright"><a href="/" title="收藏" className="_btn collect"></a></td>
                            <td><a href="/" title="下载" className="_btn download"></a></td>
                        </tr>
                    )) }
            </tbody>
        )
    }
}