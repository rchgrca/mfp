import React, { Component } from 'react';
import { render } from 'react-dom';

export default class RowInput extends Component {
    render() {
        let { meal, cellStyle, inputStyle, handleFormChange } = this.props
        // let cellStyle = this.getCellStyle(),
        // inputStyle = "border-box w100 p1 border-none";
        return (
            <tr>
                <td className="border"><input type="text" onChange={handleFormChange.bind(this, meal, 'food')} placeholder="Food" className={inputStyle}/></td>
                <td className="border"><input type="text" onChange={handleFormChange.bind(this, meal, 'calories')} placeholder="Calories" className={`${inputStyle} center`}/></td>
                <td className="border"><input type="text" onChange={handleFormChange.bind(this, meal, 'carbs')} placeholder="Carbs (g)" className={`${inputStyle} center`}/></td>
                <td className="border"><input type="text" onChange={handleFormChange.bind(this, meal, 'fat')} placeholder="Fat (g)" className={`${inputStyle} center`}/></td>
                <td className="border"><input type="text" onChange={handleFormChange.bind(this, meal, 'protein')} placeholder="Protein (g)" className={`${inputStyle} center`}/></td>
                <td className="border"><input type="text" onChange={handleFormChange.bind(this, meal, 'sugar')} placeholder="Sugar (g)" className={`${inputStyle} center`}/></td>
            </tr>
        )
    }
}
