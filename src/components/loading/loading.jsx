import React, { Component } from 'react';

export default class Loading extends Component {
    render () {
        return (
            <div class="lazyload"><div class="donghua">{this.props.content}</div></div>
        )
    }
}