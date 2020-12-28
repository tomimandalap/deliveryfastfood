var ctx = document.getElementById('revenueChart').getContext('2d');

var myChart = new Chart(ctx, {
type: 'line',
data: {
    datasets: [{
        backgroundColor: 'transparent',
        borderColor: '#00F1FF',
        data: [0, 20,10,30,20,40,10,48,40,30,35,23,45,35,40,30,22,40,30],
        label: 'The Month',
        yAxisID: 'left-y-axis',
        title: 'coba'
    }, {
        backgroundColor: 'transparent',
        borderColor: '#FFB8C6',
        data: [10,30,5,35,20,40,10,30,20,45,10,25,10,40],
        label: 'Last Month',
        yAxisID: 'left-y-axis'
    }],
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
},
options: {
    // title: {
    //     display: true,
    //     text: 'Revenue',
    //     fontColor: 'rgb(0,0,0)',
    //     fontFamily: 'Airbnb Cereal App',
    //     fontSize: 20,
    //     position: 'top',
    //     padding: 10
    // },
    legend: {
        display: true,
        labels: {
            fontColor: 'rgb(0,0,0)',
            fontFamily: 'Airbnb Cereal App',
            fontSize: 12,
            padding: 15
        },
        position: 'bottom'
    },
    scales: {
        yAxes: [{
            id: 'left-y-axis',
            type: 'linear',
            position: 'left',
            ticks: {
                max: 50,
                min: 0,
                stepSize: 10
            },
            // scaleLabel: {
            //     display: true,
            //     labelString: "Rupiah",
            //     fontColor: "teal"
            // }
            // gridLines: {
            //     color: "black",
            //     // borderDash: [5, 10],
            // }
        }],
        xAxes: [{
            display: false,
            ticks: {
                display: false,
                max: 15,
                min: 0,
                stepSize: 10,
            },
            // scaleLabel: {
            //     display: true,
            //     labelString: "Time in Seconds",
            //     fontColor: "red"
            // }
        }]
    }
}
});

// chart.canvas.parentNode.style.height='50px';
// chart.canvas.parentNode.style.width='50px';