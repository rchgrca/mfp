import React, { Component } from 'react';
import { render } from 'react-dom';

export default class RowButton extends Component {
    render() {
        let { meal, handleSubmit, buttonText } = this.props
        return (
            <tr>
                <td className="btn-container right-align border-none" colSpan="6"><button className="btn mb1 bg-darkblue rounded px2 py1 cursor bg-darkblue white border-none button relative" value={meal} onClick={this.handleSubmit.bind(this)}>{buttonText}</button></td>
            </tr>
        )
    }
}
