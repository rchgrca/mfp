import model from '../../../js/models/index'
import moment from 'moment'

describe("The JSON data model", () => {
    describe("the user data", () => {
        it("has a real name with an email address", () => {
            expect(model.name).toEqual("Richard L. Garcia")
            expect(model.email).toEqual("rchgrca@gmail.com")
        })
    })

    describe("has daily food intake logged", () => {
        it("has an array of dates", () => {
            expect(model.dates).toBeDefined()
            expect(moment(Object.keys(model.dates)[0]).isValid()).toEqual(true)
        })

        it("has meals:  breakfast, lunch, dinner, snacks", () => {
            let date = "2017-07-17",
            mealData = model.dates[date].meals,
            mealName = Object.keys(mealData)

            mealName.map((meal) => {
                expect(mealData[meal]).toBeDefined()
            })
        })

        it("has an object for each food consumed representing the name, serving, calories, carbs, fat, protein, sugar", () => {
            let date = "2017-07-17",
            mealData = model.dates[date].meals,
            mealName = Object.keys(mealData)

            mealName.map((meal) => {
                mealData[meal].map((item) => {
                    expect(item.food).toBeDefined()
                    expect(item.serving).toBeDefined()
                    expect(item.calories).toBeDefined()
                    expect(item.carbs).toBeDefined()
                    expect(item.fat).toBeDefined()
                    expect(item.protein).toBeDefined()
                    expect(item.sugar).toBeDefined()
                })
            })
        })
    })

    describe("the pie chart", () => {
        it("has a configuration", () => {
            expect(model.pie).toBeDefined()
        })
    })



});
