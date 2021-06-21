// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const HW_NO = 4

// function createChart(ctx, names, status) {
//     var myChart = new Chart(ctx, {
//         type: 'bar',

//         data: {
//             labels: names,
//             datasets: [{
//                 barPercentage: 0.4,
//                 label: "Accepted",
//                 lineTension: 0.3,
//                 backgroundColor: 'brown',
//                 borderColor: "rgba(78, 115, 223, 1)",
//                 pointRadius: 3,
//                 pointBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: status[0]
//             }, {
//                 barPercentage: 0.4,
//                 label: "Compile Error",
//                 lineTension: 0.3,
//                 backgroundColor: 'yellow',
//                 borderColor: "rgba(78, 115, 223, 1)",
//                 pointRadius: 3,
//                 pointBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: status[1]
//             }, {
//                 barPercentage: 0.4,
//                 label: "Partial Accepted",
//                 lineTension: 0.3,
//                 backgroundColor: '#0abab5',
//                 borderColor: "rgba(78, 115, 223, 1)",
//                 pointRadius: 3,
//                 pointBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: status[2]
//             }, {
//                 barPercentage: 0.4,
//                 label: "Pending",
//                 lineTension: 0.3,
//                 backgroundColor: 'orange',
//                 borderColor: "rgba(78, 115, 223, 1)",
//                 pointRadius: 3,
//                 pointBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: status[3]
//             }, {
//                 barPercentage: 0.4,
//                 label: "Runtime Error",
//                 lineTension: 0.3,
//                 backgroundColor: 'black',
//                 borderColor: "rgba(78, 115, 223, 1)",
//                 pointRadius: 3,
//                 pointBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: status[4]
//             }, ],
//         },
//         options: {
//             maintainAspectRatio: false,
//             layout: {
//                 padding: {
//                     left: 10,
//                     right: 25,
//                     top: 25,
//                     bottom: 0
//                 }
//             },
//             scales: {
//                 xAxes: [{
//                     stacked: true,
//                     gridLines: {
//                         display: false,
//                         drawBorder: false
//                     },



//                 }],
//                 yAxes: [{
//                     stacked: true,
//                     ticks: {
//                         padding: 10,
//                     },
//                     gridLines: {
//                         color: "rgb(234, 236, 244)",
//                         zeroLineColor: "rgb(234, 236, 244)",
//                         drawBorder: false,
//                         borderDash: [2],
//                         zeroLineBorderDash: [2]
//                     }
//                 }],
//             },
//             legend: {
//                 labels: {
//                     boxWidth: 20
//                 }
//                 //display: false
//             },
//             tooltips: {
//                 backgroundColor: "rgb(255,255,255)",
//                 bodyFontColor: "#858796",
//                 titleMarginBottom: 10,
//                 titleFontColor: '#6e707e',
//                 titleFontSize: 14,
//                 borderColor: '#dddfeb',
//                 borderWidth: 1,
//                 xPadding: 15,
//                 yPadding: 15,
//                 displayColors: false,
//                 intersect: false,
//                 mode: 'index',
//                 caretPadding: 10,
//             }
//         }
//     })
//     return myChart;
// };
function createChart(ctx, label, data, hw_name) {
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,


            datasets: [{
                fill: false,
                label: hw_name[0],
                lineTension: 0.3,
                //backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "rgb(68,114,196)",
                pointRadius: 0,
                pointBackgroundColor: "rgba(78, 115, 223, 0.05",
                //pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: data[0]
            }, {
                fill: false,
                label: hw_name[1],
                lineTension: 0.3,
                //backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "red",
                pointRadius: 0,
                pointBackgroundColor: "red",
                //pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: data[1]
            }, {
                fill: false,
                label: hw_name[2],
                lineTension: 0.3,
                // backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "green",
                pointRadius: 0,
                pointBackgroundColor: "green",
                //pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: data[2]
            }, {
                fill: false,
                label: hw_name[3],
                lineTension: 0.3,
                //backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "rgb(237,125,49)",
                pointRadius: 0,
                pointBackgroundColor: "rgb(237,125,49)",
                // pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: data[3]
            }, {
                fill: false,
                label: hw_name[4],
                lineTension: 0.3,
                //backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "violet",
                pointRadius: 0,
                pointBackgroundColor: "violet",
                //pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: data[4]
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    //ticks: { maxTicksLimit: 7 }
                }],
                yAxes: [{
                    ticks: {
                        padding: 10,
                        maxTicksLimit: 7
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: { display: true },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
            }
        }

    })
};

var chart1, chart2, chart3, chart4, chart5, chart6;

function rdten() {
    var ran = []
    for (var i = 0; i < 10; i++) {
        ran.push(Math.floor(Math.random() * 100));
    }
    return ran
}

function DrawSixCharts() {
    // var ctx1 = document.getElementById("overview");
    // // var user = localStorage['User'];

    // chart.database().ref().on('value', snapshot => {


    //         let snap = snapshot.val()
    //         var hw_names = Object.keys(snap)
    //         var status_names = Object.keys(snap[hw_names[0]])
    //         hw_names.sort()
    //         var overview_names = hw_names.slice(0, 5)

    //         console.log(hw_names)
    //         var status = [
    //             [],
    //             [],
    //             [],
    //             [],
    //             [],
    //             [],
    //             []
    //         ]

    //         for (var i = 0; i < overview_names.length; i++) {
    //             status[0].push(snap[overview_names[i]]['Accepted'])
    //             status[1].push(snap[overview_names[i]]['Compile Error'])
    //             status[2].push(snap[overview_names[i]]['Partial Accepted'])
    //             status[3].push(snap[overview_names[i]]['Runtime Error'])
    //             status[4].push(snap[overview_names[i]]['Pending'])
    //             status[5].push(snap[overview_names[i]]['Time Limit Exceeded'])
    //             status[6].push(snap[overview_names[i]]['Wrong Answer'])

    //         }
    //         for (var i = 0; i < status.length; i++) {

    //         }

    //         chart1 = createChart(ctx1, overview_names, status)
    //     }


    // );

    var ctx2 = document.getElementById("sixChartOne");
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var day = Object.keys(snap)
            var hw_names = Object.keys(snap[day[0]])
            hw_names.sort()
            hw_name = hw_names.slice(0, 5)
            var hw = [
                [],
                [],
                [],
                [],
                []

            ]

            for (var i = 0; i < day.length; i++) {
                hw[0].push(snap[day[i]][hw_name[0]])
                hw[1].push(snap[day[i]][hw_name[1]])
                hw[2].push(snap[day[i]][hw_name[2]])
                hw[3].push(snap[day[i]][hw_name[3]])
                hw[4].push(snap[day[i]][hw_name[4]])

            }
            var ind = getIndex(hw[0])
            for (var i = 0; i < hw.length; i++) {
                hw[i] = hw[i].slice(ind[0], ind[1] + 1)
            }
            chart2 = createChart(ctx2, day.slice(ind[0], ind[1] + 1), hw, hw_name)
        }

    );

    var ctx3 = document.getElementById("sixChartTwo");
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var day = Object.keys(snap)
            var hw_names = Object.keys(snap[day[0]])
            hw_names.sort()
            hw_name = hw_names.slice(5, 10)
            console.log(hw_name)
            var hw = [
                [],
                [],
                [],
                [],
                []

            ]

            for (var i = 0; i < day.length; i++) {
                hw[0].push(snap[day[i]][hw_name[0]])
                hw[1].push(snap[day[i]][hw_name[1]])
                hw[2].push(snap[day[i]][hw_name[2]])
                hw[3].push(snap[day[i]][hw_name[3]])
                hw[4].push(snap[day[i]][hw_name[4]])

            }
            var ind = getIndex(hw[0])
            for (var i = 0; i < hw.length; i++) {
                hw[i] = hw[i].slice(ind[0], ind[1] + 1)
            }
            console.log(hw)

            chart3 = createChart(ctx3, day.slice(ind[0], ind[1] + 1), hw, hw_name)
        }

    );

    var ctx4 = document.getElementById("sixChartThree");
    chart.database().ref().on('value', snapshot => {
        let snap = snapshot.val()
        var day = Object.keys(snap)
        var hw_names = Object.keys(snap[day[0]])
        hw_names.sort()
        hw_name = hw_names.slice(10, 15)
        console.log(hw_name)
        var hw = [
            [],
            [],
            [],
            [],
            []

        ]

        for (var i = 0; i < day.length; i++) {
            hw[0].push(snap[day[i]][hw_name[0]])
            hw[1].push(snap[day[i]][hw_name[1]])
            hw[2].push(snap[day[i]][hw_name[2]])
            hw[3].push(snap[day[i]][hw_name[3]])
            hw[4].push(snap[day[i]][hw_name[4]])

        }
        var ind = getIndex(hw[0])
        for (var i = 0; i < hw.length; i++) {
            hw[i] = hw[i].slice(ind[0], ind[1] + 1)
        }
        console.log(hw)

        chart4 = createChart(ctx4, day.slice(ind[0], ind[1] + 1), hw, hw_name)
    });

    var ctx5 = document.getElementById("sixChartFour");
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var day = Object.keys(snap)
            var hw_names = Object.keys(snap[day[0]])
            hw_names.sort()
            hw_name = hw_names.slice(15, 20)
            console.log(hw_name)
            var hw = [
                [],
                [],
                [],
                [],
                []

            ]

            for (var i = 0; i < day.length; i++) {
                hw[0].push(snap[day[i]][hw_name[0]])
                hw[1].push(snap[day[i]][hw_name[1]])
                hw[2].push(snap[day[i]][hw_name[2]])
                hw[3].push(snap[day[i]][hw_name[3]])
                hw[4].push(snap[day[i]][hw_name[4]])

            }
            var ind = getIndex(hw[0])
            for (var i = 0; i < hw.length; i++) {
                hw[i] = hw[i].slice(ind[0], ind[1] + 1)
            }
            console.log(hw)

            chart5 = createChart(ctx5, day.slice(ind[0], ind[1] + 1), hw, hw_name)
        }

    );

    // var ctx6 = document.getElementById("sixChartSix");
    // var len
    // var arr6 = [];
    // chart.database().ref().on('value', snapshot => {
    //     let snap = snapshot.val()
    //     time_series = Object.keys(snap)
    //     time_series.sort()
    //     len = time_series.length
    //     if (chart6) {
    //         chart6.data.datasets[0].backgroundColor = col
    //         chart6.data.datasets[0].data = rdten()
    //         chart6.update()
    //     } else {
    //         let snap = snapshot.val()
    //         time_series = Object.keys(snap)
    //         time_series.sort()
    //         len = time_series.length
    //         for (var i = 0; i < len; i++) {
    //             arr6.push(snap[time_series[i]][user])
    //         }
    //         chart6 = createChart(ctx6, col, arr6)
    //     }

    // })
}

function getIndex(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != -1) {
            var top = i
            break
        }
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != -1) {
            var bottom = i
            break
        }
    }
    console.log(top, bottom)
    return [top, bottom]
}



DrawSixCharts("red")

var dropdown_button = document.getElementById("dropdown-button");
var hw1 = document.getElementById("dropdown-hw1")
var hw2 = document.getElementById("dropdown-hw2")
var hw3 = document.getElementById("dropdown-hw3")
var hw4 = document.getElementById("dropdown-hw4")
var hw5 = document.getElementById("dropdown-hw5")
var hw6 = document.getElementById("dropdown-hw6")
hw1.onclick = function() {
    HWButtonFunc(this, colors[0])
}
hw2.onclick = function() {
    HWButtonFunc(this, colors[1])
}
hw3.onclick = function() {
    HWButtonFunc(this, colors[2])
}
hw4.onclick = function() {
    HWButtonFunc(this, colors[3])
}
hw5.onclick = function() {
    HWButtonFunc(this, colors[4])
}
hw6.onclick = function() {
    HWButtonFunc(this, colors[5])
}


var hw_total = document.getElementById("hw-total");
var hw_01 = document.getElementById("hw-01");
var hw_02 = document.getElementById("hw-02");
var hw_03 = document.getElementById("hw-03");
var hw_04 = document.getElementById("hw-04");
var hw_05 = document.getElementById("hw-05");

hw_total.textContent = ("Homework 1 Total")
hw_01.textContent = ("Homework 1 01")
hw_02.textContent = ("Homework 1 02")
hw_03.textContent = ("Homework 1 03")
hw_04.textContent = ("Homework 1 04")
hw_05.textContent = ("Homework 1 05")

function ChangeHWName(hw) {
    dropdown_button.textContent = hw.textContent;

    hw_total.textContent = (hw.textContent + " Total")
    hw_01.textContent = (hw.textContent + " 01")
    hw_02.textContent = (hw.textContent + " 02")
    hw_03.textContent = (hw.textContent + " 03")
    hw_04.textContent = (hw.textContent + " 04")
    hw_05.textContent = (hw.textContent + " 05")

}

function HWButtonFunc(hw, col) {
    ChangeHWName(hw)
    DrawSixCharts(col)
}