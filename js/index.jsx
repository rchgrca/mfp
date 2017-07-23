import React, { Component } from 'react';
import { render } from 'react-dom';
import model from './models/index';
import { Pie } from 'react-chartjs-2';

export default class App extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    let pie = model.pie,
    gridStyle = "sm-col sm-col-6",
    arrowStyle = "absolute cursor"

    return (
        <div className="clearfix pl1 pr1">
            <h2 className="center">mycalpal</h2>
            <p className="center h5 italic">"{model.quote}"</p>
            <section className={`${gridStyle} main`}>
                <div className="relative arrow-container">
                    <i className={`${arrowStyle} left-0 fa fa-arrow-left`} onClick="" aria-hidden="true"></i>
                    <i className={`${arrowStyle} right-0 fa fa-arrow-right`} onClick="" aria-hidden="true"></i>
                </div>
                <div className="day">
                    <div className="center pb1 date">Sun, July 16, 2017</div>
                    <div className="">
                        <table className="mx-auto">
                            <thead>
                                <tr>
                                    <td className=""><div className="">Breakfast</div></td>
                                    <td className="border border-navy bg-white center"><div className="">Calories</div></td>
                                    <td className="border border-navy bg-white center"><div className="">Carbs</div></td>
                                    <td className="border border-navy bg-white center"><div className="">Fat</div></td>
                                    <td className="border border-navy bg-white center"><div className="">Protein</div></td>
                                    <td className="border border-navy bg-white center"><div className="">Sugar</div></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-white relative px1 py2"><div className="truncate" title="Starkist Solid White Albacore Tuna In Water">Starkist Solid White Albacore Tuna In Water</div> <i className="fa fa-trash-o absolute top-0 right-0 cursor" title="Delete" aria-hidden="true"/></td>
                                    <td className="border border-white center">1,000 cals</td>
                                    <td className="border border-white center">3 g</td>
                                    <td className="border border-white center">0 g</td>
                                    <td className="border border-white center">0 g</td>
                                    <td className="border border-white center">2 g</td>
                                </tr>
                                <tr>
                                    <td className="border border-white relative px1 py2"><div className="truncate" title="Starkist Solid White Albacore Tuna In Water">Starkist Solid White Albacore Tuna In Water</div> <i className="fa fa-trash-o absolute top-0 right-0 cursor" title="Delete" aria-hidden="true"/></td>
                                    <td className="border border-white center">1,000 cals</td>
                                    <td className="border border-white center">3 g</td>
                                    <td className="border border-white center">0 g</td>
                                    <td className="border border-white center">0 g</td>
                                    <td className="border border-white center">2 g</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className={`${gridStyle} visual`}>
                <div className="center">Calories per Meal:</div>
                <Pie data={pie} options={pie.options}/>
            </section>
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
