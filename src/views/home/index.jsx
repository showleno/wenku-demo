import React, { Component } from 'react';
import SearchHead from '../../components/header/Search_head';
import Classify from '../../components/classify/Classify';
import NewShare from '../../components/newShare/NewShare';

class Index extends Component {
    render () {
        return (
            <div className="Index">
                <SearchHead prop={this.props} />
                <Classify />
                <NewShare />
            </div>
        )
    }
}
export default Index;