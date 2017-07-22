import React, { Component } from 'react';
import { render } from 'react-dom';
import model from './models/index';
import { Pie } from 'react-chartjs-2';

export default class App extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    let pie = model.pie
    return (
        <div className="clearfix pl2 pr2">
            <h2 className="center">mycalpal</h2>
            <section className="sm-col sm-col-6 main">
                <div className="relative arrow-container">
                    <i className="absolute left-0 cursor fa fa-arrow-left" onClick="" aria-hidden="true"></i>
                    <i className="absolute right-0 cursor fa fa-arrow-right" onClick="" aria-hidden="true"></i>
                </div>
                <div className="center">Mon, July 17, 2017</div>
            </section>
            <section className="sm-col sm-col-6 visual">
                <div className="center">Calories per Meal:</div>
                <Pie data={pie} options={pie.options}/>
            </section>
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
