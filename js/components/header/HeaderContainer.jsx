import React, { Component } from 'react';
import { render } from 'react-dom';

export default class HeaderContainer extends Component {
    render() {
        let { style, title, quote } = this.props;
        return (
            <section className="bg-darkblue py1 mb2">
                <h2 className="center white">{title}</h2>
                <p className="center h5 italic white">{`"${quote}"`}</p>
            </section>
        )
    }
}
