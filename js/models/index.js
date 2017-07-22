export default Object.assign({}, {
    name: "Richard L. Garcia",
    email: "rchgrca@gmail.com",
    quote: "Meditation for Mindfulness for Good Choices",
    dates:[
       {
           "2017-07-16":{
                breakfast:[
                    {food:"Picante Sauce",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Sara Lee Whole Wheat Sliced Bread",serving:2,calories:45,carbs:3,fat:0,protein:0,sugar:2 },
                    {food:"Cheese Shredded",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Coffee",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Sugar Cube",serving:3,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Eggs Scrambled",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2}
                ],
                lunch:[
                    {food:"Starkist Solid White Albacore Tuna In Water",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Sara Lee Whole Wheat Sliced Bread",serving:2,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Helman's Mayonnaise Canola",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Milk Chocolate, lowfat",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                ],
                dinner:[
                    {food:"Beef Tri Tip Steak",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Brussel Sprouts",serving:2,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Mac N Cheese",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                ],
                snacks:[
                    {food:"Blueberries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Almonds",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Pretzels Sticks",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Blackberries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Blueberries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Rasbperries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                ]
            }
        },
        {
            "2017-07-17":{
                breakfast:[
                    {food:"Picante Sauce",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Sara Lee Whole Wheat Sliced Bread",serving:2,calories:45,carbs:3,fat:0,protein:0,sugar:2 },
                    {food:"Cheese Shredded",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Coffee",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Sugar Cube",serving:3,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Eggs Scrambled",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2}
                ],
                lunch:[
                    {food:"White rice",serving:1,calories:121,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Cajun Shrimp",serving:2,calories:230,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Mr. Pibb",serving:1,calories:250,carbs:3,fat:0,protein:0,sugar:2}
                ],
                dinner:[
                    {food:"White rice",serving:1,calories:121,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Cajun Shrimp",serving:2,calories:230,carbs:3,fat:0,protein:0,sugar:2},
                ],
                snacks:[
                    {food:"Blueberries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Almonds",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Pretzels Sticks",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Blackberries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Blueberries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                    {food:"Rasbperries",serving:1,calories:10,carbs:3,fat:0,protein:0,sugar:2},
                ]
             }
         },

    ],
    pie: {
        labels: ["Breakfast", "Lunch", "Dinner", "Snacks"],
        datasets: [{
            data: [641, 210, 510, 150],
            backgroundColor: ["#0544d3", "#6b0392", "#59922b", "#d70206"],
            hoverBackgroundColor: ["#0544d3", "#6b0392", "#59922b", "#d70206"],
            borderWidth: [0,0,0,0,0,0,0,0],
            legend: {
                itemStyle: {
                    color: '#ffffff',
                    fontWeight: 'bold'
                }
            },
        }],
        options: {
            responsive: true,
            cutoutPercentage: 0,
            animation: {
                animateScale: true
            }
        }
    }
})
