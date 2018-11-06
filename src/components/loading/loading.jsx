import React, { Component } from 'react';

export default class Loading extends Component {
    render () {
        return (
            <div className="lazyload"><div className="donghua">{this.props.content}</div></div>
        )
    }
}