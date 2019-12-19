import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        let { children } = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}
