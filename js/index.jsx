import React, { Component } from 'react';
import { render } from 'react-dom';
import model from './models/index'

export default class App extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
        <div className="clearfix">
            <section className="sm-col sm-col-3">
                Left {model.name}
            </section>
            <section className="sm-col sm-col-9">
                Right {model.email}
            </section>
        </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
