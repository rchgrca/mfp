import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import model from './models/index';
import methods from './methods/index';
import { Pie } from 'react-chartjs-2';
import HeaderContainer from './components/header/HeaderContainer.jsx';

export default class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          date: methods.getDate(),
          dates: model.dates,
          tempItem: {}
      }

      this.handleArrows = this.handleArrows.bind(this);
  }

  render() {
    let gridStyle = methods.getGridStyle(),
    arrowStyle = methods.getArrowStyle(),
    { date } = this.state,
    oMeals = this.getModel(),
    { quote, title, pie: { options } } = model;

    return (
        <div className="clearfix px1">
            <HeaderContainer title={title} quote={quote}/>
            <section className={`${gridStyle} pb2 main`}>
                <div className="relative arrow-container">
                    <i className={`${arrowStyle} fa-arrow-left left-0`} onClick={this.handleArrows} aria-hidden="true"></i>
                    <i className={`${arrowStyle} fa-arrow-right right-0`} onClick={this.handleArrows} aria-hidden="true"></i>
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
                <Pie data={this.setPieModel('calories')} options={options}/>
                <div className="center navy mt3">Carbs per Meal (g):</div>
                <Pie data={this.setPieModel('carbs')} options={options}/>
                <div className="center navy mt3">Sugar per Meal (g):</div>
                <Pie data={this.setPieModel('sugar')} options={options}/>
            </section>
        </div>
    )
  }

  getMeals(){
      let oMeals = this.getModel();

      return oMeals.name.map((meal) => {
          return (
              <form>
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
              </form>
          )
      })
  }

  getFoodItems(meal){
      let oMeals = this.getModel(),
      cellStyle = methods.getCellStyle();

      return oMeals.data[meal].map((item, i) => {
          return (
              <tr>
                  <td className={`${cellStyle} bg-lavender relative`}>
                      <div className="truncate mr2" title={item.food}>{item.food}</div>
                      <i className="fa fa-trash-o absolute right-0 cursor" title="Delete" onClick={() => {this.handleDelete(meal,i)}}/>
                  </td>
                  <td className={`${cellStyle} bg-lavender center`}><span className="metahead">Calories: </span>{item.calories} cals</td>
                  <td className={`${cellStyle} bg-lavender center`}><span className="metahead">Carbs: </span>{item.carbs} g</td>
                  <td className={`${cellStyle} bg-lavender center`}><span className="metahead">Fat: </span>{item.fat} g</td>
                  <td className={`${cellStyle} bg-lavender center`}><span className="metahead">Protein: </span>{item.protein} g</td>
                  <td className={`${cellStyle} bg-lavender center`}><span className="metahead">Sugar: </span>{item.sugar} g</td>
              </tr>
          )
      })
  }

  getForm(meal){
      let cellStyle = methods.getCellStyle(),
      inputStyle = methods.getInputStyle();

      return (
          <tr>
              <td className="border"><input type="text" onChange={this.handleFormChange.bind(this, meal, 'food')} placeholder="Food" className={inputStyle}/></td>
              <td className="border"><input type="text" onChange={this.handleFormChange.bind(this, meal, 'calories')} placeholder="Calories" className={`${inputStyle} center`}/></td>
              <td className="border"><input type="text" onChange={this.handleFormChange.bind(this, meal, 'carbs')} placeholder="Carbs (g)" className={`${inputStyle} center`}/></td>
              <td className="border"><input type="text" onChange={this.handleFormChange.bind(this, meal, 'fat')} placeholder="Fat (g)" className={`${inputStyle} center`}/></td>
              <td className="border"><input type="text" onChange={this.handleFormChange.bind(this, meal, 'protein')} placeholder="Protein (g)" className={`${inputStyle} center`}/></td>
              <td className="border"><input type="text" onChange={this.handleFormChange.bind(this, meal, 'sugar')} placeholder="Sugar (g)" className={`${inputStyle} center`}/></td>
          </tr>
      )
  }

  getSubmitButton(meal){
      return (
          <tr>
              <td className="btn-container right-align border-none" colSpan="6"><button className="btn mb1 bg-darkblue rounded px2 py1 cursor bg-darkblue white border-none button relative" value={meal} onClick={this.handleSubmit.bind(this)}>Add Food</button></td>
          </tr>
      )
  }

  handleDelete(meal, i){
      let { date, dates } = this.state;
      this.setState(dates[date].meals[meal].splice(i,1));
  }

  handleFormChange(meal, item, e){
      let { tempItem } = this.state,
      { value } = e.target;

      value = (item == 'food') ? value : parseInt(value,10)

      this.setState({
          tempItem: {
              ...tempItem,
              [item]: value
          }
      })
  }

  handleSubmit(e){
      e.preventDefault();
      let meal = e.target.value,
      { date, dates, tempItem } = this.state,
      aForms = document.getElementsByTagName('form');

      this.setState({
          dates:{
              ...dates,
              [date]:{
                  meals:{
                      ...dates[date].meals,
                      [meal]:[
                          ...dates[date].meals[meal],
                          tempItem
                      ]
                  }
              }
          }
      });

      for (let i=0;i<aForms.length;i++){
          aForms[i].reset()
      }
  }

  handleArrows(e){
      let { date, dates } = this.state,
      day = e.target.className.includes("right") ? 1 : -1,
      formattedDate = moment(date).add(day, 'days').format('YYYY-MM-DD')

      if(dates[formattedDate]){
          this.setState({
              date:formattedDate
          })
      }
  }

  getNutrientMeal(meal){
      let { date } = this.state,
      cellStyle = methods.getCellStyle();

      return (
          <tr>
              <td className={`${cellStyle} bg-lavender bold`}><span className="metahead mobile">Total</span>Total</td>
              <td className={`${cellStyle} bg-lavender bold center`}><span className="metahead">Calories: </span>{this.getNutrientMealTotal(date, meal, "calories")} cals</td>
              <td className={`${cellStyle} bg-lavender bold center`}><span className="metahead">Carbs: </span>{this.getNutrientMealTotal(date, meal, "carbs")} g</td>
              <td className={`${cellStyle} bg-lavender bold center`}><span className="metahead">Fat: </span>{this.getNutrientMealTotal(date, meal, "fat")} g</td>
              <td className={`${cellStyle} bg-lavender bold center`}><span className="metahead">Protein: </span>{this.getNutrientMealTotal(date, meal, "protein")} g</td>
              <td className={`${cellStyle} bg-lavender bold center`}><span className="metahead">Sugar: </span>{this.getNutrientMealTotal(date, meal, "sugar")} g</td>
          </tr>
      )
  }

  getMacroTotals(){
      let { date } = this.state,
      cellStyle = methods.getCellStyle();

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
                  <tr>
                      <td className={`${cellStyle} center bold`}><span className="metahead">Total Today</span></td>
                      <td className={`${cellStyle} center bold`}><span className="metahead">Calories: </span>{this.getNutrientTotals(date, "calories")} cals</td>
                      <td className={`${cellStyle} center bold`}><span className="metahead">Carbs: </span>{this.getNutrientTotals(date, "carbs")} g</td>
                      <td className={`${cellStyle} center bold`}><span className="metahead">Fat: </span>{this.getNutrientTotals(date, "fat")} g</td>
                      <td className={`${cellStyle} center bold`}><span className="metahead">Protein: </span>{this.getNutrientTotals(date, "protein")} g</td>
                      <td className={`${cellStyle} center bold`}><span className="metahead">Sugar: </span>{this.getNutrientTotals(date, "sugar")} g</td>
                  </tr>
              </tbody>
          </table>
      )
  }

  getModel(){
      let {
          date, dates:{
              [date]:{
                  meals
              }
          }
      } = this.state;
      return {
          data:meals,
          name:Object.keys(meals)
      }
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
      { pie } = model,
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
