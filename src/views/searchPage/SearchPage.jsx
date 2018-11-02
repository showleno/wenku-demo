import React, { Component } from 'react';
import Search from '../../components/search/Search';

class SearchPage extends Component {
    render () {
        return (
            <div>
                <Search prop={this.props}/>
            </div>
        )
    }
}
export default SearchPage;