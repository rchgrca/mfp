import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import model from './models/index';
import { Pie } from 'react-chartjs-2';

export default class App extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    let pie = model.pie,
    gridStyle = "sm-col sm-col-6",
    arrowStyle = "absolute cursor top-0 fa",
    date = "2017-07-17",
    mealData = model.dates[date].meals,
    mealName = Object.keys(mealData)

    return (
        <div className="clearfix pl1 pr1">
            <h2 className="center">mycalpal</h2>
            <p className="center h5 italic">"{model.quote}"</p>
            <section className={`${gridStyle} pb2 main`}>
                <div className="relative arrow-container">
                    <i className={`${arrowStyle} fa-arrow-left left-0`} onClick="" aria-hidden="true"></i>
                    <i className={`${arrowStyle} fa-arrow-right right-0`} onClick="" aria-hidden="true"></i>
                </div>
                <div className="day">
                    <div className="center mb3 date">{moment(date).format('MMMM Do, YYYY')}</div>
                    <div className="">
                        {this.getMeals(mealData,mealName)}
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

  getMeals(mealData,mealName){
      return mealName.map((meal) => {
          return (
              <table className="mx-auto mb3">
                  <thead>
                      <tr>
                          <td><div className="capitalize bold">{meal}</div></td>
                          <td className="border border-navy bg-white center"><div className="">Calories</div></td>
                          <td className="border border-navy bg-white center"><div className="">Carbs</div></td>
                          <td className="border border-navy bg-white center"><div className="">Fat</div></td>
                          <td className="border border-navy bg-white center"><div className="">Protein</div></td>
                          <td className="border border-navy bg-white center"><div className="">Sugar</div></td>
                      </tr>
                  </thead>
                  <tbody>
                      {this.getFoodItems(mealData,meal)}
                  </tbody>
              </table>
          )
      })
  }

  getFoodItems(mealData,meal){
      let styles = "border border-white center";

      return mealData[meal].map((item) => {
          return (
              <tr>
                  <td className="border border-white relative px1 py1">
                      <div className="truncate mr2" title={item.food}>{item.food}</div>
                      <i className="fa fa-trash-o absolute right-0 cursor" title="Delete"/>
                  </td>
                  <td className={styles}><span className="metahead">Calories: </span>{item.calories} cals</td>
                  <td className={styles}><span className="metahead">Carbs: </span>{item.carbs} g</td>
                  <td className={styles}><span className="metahead">Fat: </span>{item.fat} g</td>
                  <td className={styles}><span className="metahead">Protein: </span>{item.protein} g</td>
                  <td className={styles}><span className="metahead">Sugar: </span>{item.sugar} g</td>
              </tr>
          )
      })
  }


}

render(<App/>, document.getElementById('app'));
