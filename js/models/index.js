export default Object.assign({}, {
    "name": "Richard L. Garcia",
    "email": "rchgrca@gmail.com",
    "phone": "5109183102",
    "pie": {
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
