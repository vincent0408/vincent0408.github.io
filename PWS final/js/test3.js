// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const HW_NO = 4

function createChart(ctx, label, data, title) {
    var myChart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: label,
            datasets: [{
                barPercentage: 0.4,
                label: title[0],
                lineTension: 0.3,
                backgroundColor: 'brown',
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: data[0]
            }, {
                barPercentage: 0.4,
                label: title[1],
                lineTension: 0.3,
                backgroundColor: 'yellow',
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: data[1]
            }, ],
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



                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        padding: 10,
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
            legend: {
                labels: {
                    boxWidth: 20
                },
                display: false
            },
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
    return myChart;
};
// function createChart(ctx, label, data, hw_name) {
//     var myLineChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: label,


//             datasets: [{
//                 fill: false,
//                 label: hw_name[0],
//                 lineTension: 0.3,
//                 //backgroundColor: "rgba(78, 115, 223, 0.05)",
//                 borderColor: "rgb(68,114,196)",
//                 pointRadius: 0,
//                 pointBackgroundColor: "rgba(78, 115, 223, 0.05",
//                 //pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: data[0]
//             }, {
//                 fill: false,
//                 label: hw_name[1],
//                 lineTension: 0.3,
//                 //backgroundColor: "rgba(78, 115, 223, 0.05)",
//                 borderColor: "red",
//                 pointRadius: 0,
//                 pointBackgroundColor: "red",
//                 //pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: data[1]
//             }, {
//                 fill: false,
//                 label: hw_name[2],
//                 lineTension: 0.3,
//                 // backgroundColor: "rgba(78, 115, 223, 0.05)",
//                 borderColor: "green",
//                 pointRadius: 0,
//                 pointBackgroundColor: "green",
//                 //pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: data[2]
//             }, {
//                 fill: false,
//                 label: hw_name[3],
//                 lineTension: 0.3,
//                 //backgroundColor: "rgba(78, 115, 223, 0.05)",
//                 borderColor: "rgb(237,125,49)",
//                 pointRadius: 0,
//                 pointBackgroundColor: "rgb(237,125,49)",
//                 // pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: data[3]
//             }, {
//                 fill: false,
//                 label: hw_name[4],
//                 lineTension: 0.3,
//                 //backgroundColor: "rgba(78, 115, 223, 0.05)",
//                 borderColor: "violet",
//                 pointRadius: 0,
//                 pointBackgroundColor: "violet",
//                 //pointBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHoverRadius: 3,
//                 pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//                 pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//                 pointHitRadius: 10,
//                 pointBorderWidth: 2,
//                 data: data[4]
//             }],
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
//                     ticks: { maxTicksLimit: 7 }
//                 }],
//                 yAxes: [{
//                     ticks: {
//                         padding: 10,
//                         maxTicksLimit: 7
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
//             legend: {},
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
// };

var chart1, chart2, chart3, chart4, chart5, chart6;

function rdten() {
    var ran = []
    for (var i = 0; i < 10; i++) {
        ran.push(Math.floor(Math.random() * 100));
    }
    return ran
}

function DrawSixCharts() {
    var ctx1 = document.getElementById("overview");
    // var user = localStorage['User'];

    chart.database().ref().on('value', snapshot => {


            let snap = snapshot.val()
            var hour = Object.keys(snap['Accepted'])
            var status = [Object.values(snap['Accepted']), Object.values(snap['Wrong Answer'])]

            var title = Object.keys(snap)

            chart1 = createChart(ctx1, hour, status, title)
        }


    );

    var ctx2 = document.getElementById("sixChartOne");
    firebase.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var ind = getIndex(Object.values(snap['Accepted_HW1']))
            var status = [Object.values(snap['Accepted_HW1']).slice(ind[0], ind[1] + 1), Object.values(snap['Wrong Answer_HW1']).slice(ind[0], ind[1] + 1)]
            var day = Object.keys(snap['Accepted_HW1']).slice(ind[0], ind[1] + 1)

            chart2 = createChart(ctx2, day, status, ['Accepted_HW1', 'Wrong Answer_HW1'])
        }

    );

    var ctx3 = document.getElementById("sixChartTwo");
    firebase.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var ind = getIndex(Object.values(snap['Accepted_HW2']))
            var status = [Object.values(snap['Accepted_HW2']).slice(ind[0], ind[1] + 1), Object.values(snap['Wrong Answer_HW2']).slice(ind[0], ind[1] + 1)]
            var day = Object.keys(snap['Accepted_HW2']).slice(ind[0], ind[1] + 1)
            for (let i = 0; i < status.length; i++) {
                status[i][status[i].indexOf(-1)] = 0
            }
            chart3 = createChart(ctx3, day, status, ['Accepted_HW2', 'Wrong Answer_HW2'])
        }

    );

    var ctx4 = document.getElementById("sixChartThree");
    firebase.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var ind = getIndex(Object.values(snap['Accepted_HW3']))
            var status = [Object.values(snap['Accepted_HW3']).slice(ind[0], ind[1] + 1), Object.values(snap['Wrong Answer_HW3']).slice(ind[0], ind[1] + 1)]
            var day = Object.keys(snap['Accepted_HW3']).slice(ind[0], ind[1] + 1)

            chart4 = createChart(ctx4, day, status, ['Accepted_HW3', 'Wrong Answer_HW3'])
        }

    );

    var ctx5 = document.getElementById("sixChartFour");
    firebase.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var ind = getIndex(Object.values(snap['Accepted_HW4']))
            var status = [Object.values(snap['Accepted_HW4']).slice(ind[0], ind[1] + 1), Object.values(snap['Wrong Answer_HW4']).slice(ind[0], ind[1] + 1)]
            var day = Object.keys(snap['Accepted_HW4']).slice(ind[0], ind[1] + 1)

            chart5 = createChart(ctx5, day, status, ['Accepted_HW4', 'Wrong Answer_HW4'])
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