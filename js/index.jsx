import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import model from './models/index';
import { Pie } from 'react-chartjs-2';

export default class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          date: this.getDate(),
          dates: model.dates
      }
  }

  render() {
    let gridStyle = "sm-col sm-col-6",
    arrowStyle = "absolute cursor top-0 fa",
    { date } = this.state,
    oMeals = this.getModel();

    return (
        <div className="clearfix px1">
            <section className="header py1 mb2">
                <h2 className="center white">mycalpal</h2>
                <p className="center h5 italic white">"{model.quote}"</p>
            </section>
            <section className={`${gridStyle} pb2 main`}>
                <div className="relative arrow-container">
                    <i className={`${arrowStyle} fa-arrow-left left-0`} onClick={this.handleArrows.bind(this)} aria-hidden="true"></i>
                    <i className={`${arrowStyle} fa-arrow-right right-0`} onClick={this.handleArrows.bind(this)} aria-hidden="true"></i>
                </div>
                <div className="day">
                    <div className="center mb1 date navy">{moment(date).format('MMMM Do, YYYY')}</div>
                    <div className="food-data">
                        {this.getMeals()}
                        {this.getMacroTotals()}
                    </div>
                </div>
            </section>
            <section className={`${gridStyle} visual`}>
                <div className="center navy">Calories per Meal (kcal):</div>
                <Pie data={this.setPieModel('calories')} options={model.pie.options}/>
                <div className="center navy mt3">Carbs per Meal (g):</div>
                <Pie data={this.setPieModel('carbs')} options={model.pie.options}/>
                <div className="center navy mt3">Sugar per Meal (g):</div>
                <Pie data={this.setPieModel('sugar')} options={model.pie.options}/>
            </section>
        </div>
    )
  }

  getMeals(){
      let oMeals = this.getModel();

      return oMeals.name.map((meal) => {
          return (
              <form ref="addFoodForm" className="" onSubmit={this.handleSubmit.bind(this)}>
                  <table className="mx-auto mb3">
                      <thead>
                          <tr>
                              <td><div className="capitalize bold" colSpan="6">{meal}</div></td>
                          </tr>
                      </thead>
                      <tbody>
                          {this.getFoodItems(meal)}
                          {this.getNutrientMeal(meal)}
                          {this.getForm(meal)}
                          {this.getSubmitButton(meal)}
                      </tbody>
                  </table>
                  <input type="hidden" name="meal" value={meal}/>
              </form>
          )
      })
  }

  getFoodItems(meal){
      let oMeals = this.getModel(),
      cellStyle = this.getCellStyle();

      return oMeals.data[meal].map((item, i) => {
          return (
              <tr>
                  <td className={`${cellStyle} relative`}>
                      <div className="truncate mr2" title={item.food}>{item.food}</div>
                      <i className="fa fa-trash-o absolute right-0 cursor" title="Delete" onClick={() => {this.handleDelete(meal,i)}}/>
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

  getForm(meal){
      let cellStyle = this.getCellStyle(),
      inputStyle = "border-box w100";

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

  getSubmitButton(meal){
      return (
          <tr className="bg-white-force">
              <td className="btn-container right-align" colSpan="6"><input type="submit" className="btn not-rounded p1 cursor" value="Add Food" /></td>
          </tr>
      )
  }

  handleDelete(meal, i){
      let { date } = this.state;

      this.setState(this.state.dates[date].meals[meal].splice(i,1));
  }

  handleSubmit(e){
      e.preventDefault();
      console.log("Add Food Handle Submit!",e)

    //   const author = this.refs.author.value;
    //   const comment = this.refs.comment.value;
  }

  handleArrows(e){
      e.preventDefault();
      let { date, dates } = this.state,
      day = e.target.className.includes("right") ? 1 : -1,
      formattedDate = moment(date).add(day, 'days').format('YYYY-MM-DD')
      if(dates[formattedDate]){
          this.setState({date:formattedDate})
      }
  }

  getNutrientMeal(meal){
      let { date } = this.state,
      cellStyle = this.getCellStyle();

      return (
          <tr className="bg-white-force">
              <td className={`${cellStyle}`}><span className="metahead">Total</span>Total</td>
              <td className={`${cellStyle} center`}><span className="metahead">Calories: </span>{this.getNutrientMealTotal(date, meal, "calories")} cals</td>
              <td className={`${cellStyle} center`}><span className="metahead">Carbs: </span>{this.getNutrientMealTotal(date, meal, "carbs")} g</td>
              <td className={`${cellStyle} center`}><span className="metahead">Fat: </span>{this.getNutrientMealTotal(date, meal, "fat")} g</td>
              <td className={`${cellStyle} center`}><span className="metahead">Protein: </span>{this.getNutrientMealTotal(date, meal, "protein")} g</td>
              <td className={`${cellStyle} center`}><span className="metahead">Sugar: </span>{this.getNutrientMealTotal(date, meal, "sugar")} g</td>
          </tr>
      )
  }

  getMacroTotals(){
      let { date } = this.state,
      cellStyle = this.getCellStyle();

      return (
          <table className="mx-auto mb3 w100">
              <thead>
                  <tr>
                      <td><div className="bold">Total Today</div></td>
                      <td className={`${cellStyle} center`}><div className="">Calories</div></td>
                      <td className={`${cellStyle} center`}><div className="">Carbs</div></td>
                      <td className={`${cellStyle} center`}><div className="">Fat</div></td>
                      <td className={`${cellStyle} center`}><div className="">Protein</div></td>
                      <td className={`${cellStyle} center`}><div className="">Sugar</div></td>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white-force">
                      <td className={`${cellStyle} center`}><span className="metahead">Total Today</span></td>
                      <td className={`${cellStyle} center`}><span className="metahead">Calories: </span>{this.getNutrientTotals(date, "calories")} cals</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Carbs: </span>{this.getNutrientTotals(date, "carbs")} g</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Fat: </span>{this.getNutrientTotals(date, "fat")} g</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Protein: </span>{this.getNutrientTotals(date, "protein")} g</td>
                      <td className={`${cellStyle} center`}><span className="metahead">Sugar: </span>{this.getNutrientTotals(date, "sugar")} g</td>
                  </tr>
              </tbody>
          </table>
      )
  }

  getModel(){
      let { date, dates:{
          [date]:{
              meals
          }
      } } = this.state;
      return {
          data:meals,
          name:Object.keys(meals)
      }
  }

  getCellStyle(){
      return "border p1";
  }

  getDate(){
      return "2017-07-18";
  }

  getNutrientMealTotal(date, meal, nutrient){
      let oMeals = this.getModel();
      return oMeals.data[meal].reduce((sum, item) => {
          return sum + item[nutrient]
      },0);
  }

  getNutrientTotals(date, nutrient){
      let oMeals = this.getModel();
      return oMeals.name.map((meal) => {
          return oMeals.data[meal]
      }).reduce((a,b) => {
          return a.concat(b)
      }).reduce((sum, item) => {
          return sum + item[nutrient]
      },0);
  }

  setPieModel(nutrient){
      let { date } = this.state,
      oMeals = this.getModel(),
      pie = model.pie,
      sliceColors = ["darkblue", "darkred", "forestgreen", "orange"]

      let { name } = this.getModel();

      let labels = name.map((meal) => {
          return meal.charAt(0).toUpperCase() + meal.slice(1);
      });

      let mealNutrientsTotal =  oMeals.name.map((meal) => {
          return oMeals.data[meal].reduce((sum, item) => {
              return sum + item[nutrient]
          },0)
      });

      return {
          ...pie,
          labels: ["Breakfast", "Lunch", "Dinner", "Snacks"],
          datasets:[{
              data:mealNutrientsTotal,
              backgroundColor: sliceColors,
              hoverBackgroundColor: sliceColors,
              borderWidth: [0,0,0,0,0,0,0,0],
              legend: {
                  itemStyle: {
                      color: '#ffffff',
                      fontWeight: 'bold'
                  }
              },
          }]
      }
  }

}

render(<App/>, document.getElementById('app'));
