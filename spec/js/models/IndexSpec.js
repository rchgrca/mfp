import model from '../../../js/models/index'
import moment from 'moment'

describe("The JSON data model", () => {
    describe("the user data", () => {
        it("has a real name with an email address", () => {
            expect(model.name).toEqual("Richard L. Garcia")
            expect(model.email).toEqual("rchgrca@gmail.com")
        })
    })

    describe("the daily food logged", () => {
        it("has an array of dates", () => {
            expect(model.dates).toBeDefined()
            expect(Array.isArray(model.dates)).toEqual(true)
            model.dates.forEach((date) => {
                expect(moment(Object.keys(date)[0]).isValid()).toEqual(true)
            })
        })

        it("has an array of 3 daily meals and an array of snacks", () => {
            model.dates.forEach((date) => {
                expect(date[Object.keys(date)[0]].breakfast).toBeDefined()
                expect(date[Object.keys(date)[0]].lunch).toBeDefined()
                expect(date[Object.keys(date)[0]].dinner).toBeDefined()
                expect(date[Object.keys(date)[0]].snacks).toBeDefined()
            })
        })

        it("has an object for each food consumed representing the name, serving, calories, carbs, fat, protein, sugar", () => {
            model.dates.forEach((date) => {
                let day = date[Object.keys(date)[0]]
                let meals = Object.keys(day)

                meals.forEach((meal) => {
                    var foods = day[meal]
                    foods.forEach((entry) => {
                        expect(entry.food).toBeDefined()
                        expect(entry.serving).toBeDefined()
                        expect(entry.calories).toBeDefined()
                        expect(entry.carbs).toBeDefined()
                        expect(entry.fat).toBeDefined()
                        expect(entry.protein).toBeDefined()
                        expect(entry.sugar).toBeDefined()
                    })
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
