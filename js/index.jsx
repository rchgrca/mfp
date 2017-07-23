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
    cellStyle = "border border-white p1",
    date = "2017-07-17",
    mealData = model.dates[date].meals,
    mealName = Object.keys(mealData)

    return (
        <div className="clearfix px1">
            <section className="header py1 mb2">
                <h2 className="center white">mycalpal</h2>
                <p className="center h5 italic white">"{model.quote}"</p>
            </section>
            <section className={`${gridStyle} pb2 main`}>
                <div className="relative arrow-container">
                    <i className={`${arrowStyle} fa-arrow-left left-0`} onClick="" aria-hidden="true"></i>
                    <i className={`${arrowStyle} fa-arrow-right right-0`} onClick="" aria-hidden="true"></i>
                </div>
                <div className="day">
                    <div className="center mb1 date navy">{moment(date).format('MMMM Do, YYYY')}</div>
                    <div className="food-data">
                        {this.getMeals(mealData, mealName, cellStyle)}
                        {this.getMacroTotals(date)}
                    </div>
                </div>
            </section>
            <section className={`${gridStyle} visual`}>
                <div className="center navy">Calories per Meal:</div>
                <Pie data={pie} options={pie.options}/>
            </section>
        </div>
    )
  }

  getMeals(mealData,mealName, cellStyle){
      return mealName.map((meal) => {
          return (
              <form ref="addFoodForm" className="" onSubmit={this.handleSubmit}>
                  <table className="mx-auto mb3">
                      <thead>
                          <tr>
                              <td><div className="capitalize bold" colSpan="6">{meal}</div></td>
                          </tr>
                      </thead>
                      <tbody>
                          {this.getFoodItems(mealData, meal, cellStyle)}
                          {this.getForm(cellStyle)}
                          {this.getSubmitButton()}
                      </tbody>
                  </table>
              </form>
          )
      })
  }

  getFoodItems(mealData, meal, cellStyle){
      return mealData[meal].map((item) => {
          return (
              <tr>
                  <td className={`${cellStyle} relative`}>
                      <div className="truncate mr2" title={item.food}>{item.food}</div>
                      <i className="fa fa-trash-o absolute right-0 cursor" title="Delete"/>
                  </td>
                  <td className={`${cellStyle} center`}><span className="metahead">Calories: </span>{item.calories} cals</td>
                  <td className={`${cellStyle} center`}><span className="metahead">Carbs: </span>{item.carbs} g</td>
                  <td className={`${cellStyle} center`}><span className="metahead">Fat: </span>{item.fat} g</td>
                  <td className={`${cellStyle} center`}><span className="metahead">Protein: </span>{item.protein} g</td>
                  <td className={`${cellStyle} center`}><span className="metahead">Sugar: </span>{item.sugar} g</td>
              </tr>
          )
      })
  }

  getForm(){
      let cellStyle = "border border-white",
      inputStyle = "border-box w100 p1"
      return (
          <tr className="bg-white-force">
              <td className={cellStyle}><input type="text" ref="item" placeholder="Food" className={inputStyle}/></td>
              <td className={cellStyle}><input type="text" ref="calories" placeholder="Calories" className={inputStyle}/></td>
              <td className={cellStyle}><input type="text" ref="carbs" placeholder="Carbs (g)" className={inputStyle}/></td>
              <td className={cellStyle}><input type="text" ref="fat" placeholder="Fat (g)" className={inputStyle}/></td>
              <td className={cellStyle}><input type="text" ref="protein" placeholder="Protein (g)" className={inputStyle}/></td>
              <td className={cellStyle}><input type="text" ref="sugar" placeholder="Sugar (g)" className={inputStyle}/></td>
          </tr>
      )
  }

  getSubmitButton(){
      let cellStyle = "border border-white";
      return (
          <tr className="bg-white-force">
              <td className="btn-container right-align" colSpan="6"><button className="btn not-rounded p1">Add Food</button></td>
          </tr>
      )
  }

  handleSubmit(){
      console.log("Add Food Handle Submit!")
  }

  getMacroTotals(date){
      let cellStyle = "border border-white"

      return (
          <table className="mx-auto mb3 w100">
              <thead>
                  <tr>
                      <td><div className="capitalize bold">Total Today</div></td>
                      <td className="border border-navy bg-white center"><div className="">Calories</div></td>
                      <td className="border border-navy bg-white center"><div className="">Carbs</div></td>
                      <td className="border border-navy bg-white center"><div className="">Fat</div></td>
                      <td className="border border-navy bg-white center"><div className="">Protein</div></td>
                      <td className="border border-navy bg-white center"><div className="">Sugar</div></td>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white-force">
                      <td className={`${cellStyle} center`}><span className="metahead">Today Today</span></td>
                      <td className={`${cellStyle} center`}><span className="metahead">Calories: </span>{this.getNutrientTotals("2017-07-17", "calories")} cals</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Carbs: </span>{this.getNutrientTotals("2017-07-17", "carbs")} g</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Fat: </span>{this.getNutrientTotals("2017-07-17", "fat")} g</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Protein: </span>{this.getNutrientTotals("2017-07-17", "protein")} g</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Sugar: </span>{this.getNutrientTotals("2017-07-17", "sugar")} g</td>
                  </tr>
              </tbody>
          </table>
      )
  }

  getNutrientTotals(date, nutrient){
      let mealData = model.dates[date].meals,
      mealName = Object.keys(mealData)

      return mealName.map((meal) => {
          return mealData[meal]
      }).reduce((a,b) => {
          return a.concat(b)
      }).reduce((sum, item) => {
          return sum + item[nutrient]
      },0)
  }
}

render(<App/>, document.getElementById('app'));
