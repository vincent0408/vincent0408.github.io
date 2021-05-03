// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const HW_NO = 4

function createChart(ctx, names, status) {
    var myChart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: names,
            datasets: [{
                barPercentage: 0.4,
                label: "Accepted",
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
                data: status[0]
            }, {
                barPercentage: 0.4,
                label: "Compile Error",
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
                data: status[1]
            }, {
                barPercentage: 0.4,
                label: "Partial Accepted",
                lineTension: 0.3,
                backgroundColor: '#0abab5',
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: status[2]
            }, {
                barPercentage: 0.4,
                label: "Pending",
                lineTension: 0.3,
                backgroundColor: 'orange',
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: status[3]
            }, {
                barPercentage: 0.4,
                label: "Runtime Error",
                lineTension: 0.3,
                backgroundColor: 'black',
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: status[4]
            }, {
                barPercentage: 0.4,
                label: "Time Limit Exceeded",
                lineTension: 0.3,
                backgroundColor: 'dark-green',
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: status[5]
            }, {
                barPercentage: 0.4,
                label: "Wrong Answer",
                lineTension: 0.3,
                backgroundColor: 'grey',
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: status[6]
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
                }
                //display: false
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

// Area Chart Example
var colors = ["red", "yellow", "green", "blue", "purple", "black"]

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
    user = 'b06703012'

    chart.database().ref().on('value', snapshot => {


            let snap = snapshot.val()
            var hw_names = Object.keys(snap)
            var status_names = Object.keys(snap[hw_names[0]])
            hw_names.sort()
            var overview_names = hw_names.slice(-HW_NO)
            var status = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]
            console.log(snap[overview_names[0]])
            console.log(status_names)

            for (var i = 0; i < overview_names.length; i++) {
                status[0].push(snap[overview_names[i]]['Accepted'])
                status[1].push(snap[overview_names[i]]['Compile Error'])
                status[2].push(snap[overview_names[i]]['Partial Accepted'])
                status[3].push(snap[overview_names[i]]['Runtime Error'])
                status[4].push(snap[overview_names[i]]['Pending'])
                status[5].push(snap[overview_names[i]]['Time Limit Exceeded'])
                status[6].push(snap[overview_names[i]]['Wrong Answer'])

            }
            for (var i = 0; i < status.length; i++) {
                console.log(status[i])

            }

            chart1 = createChart(ctx1, overview_names, status)
        }


    );
    var ctx2 = document.getElementById("sixChartOne");
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var hw_names = Object.keys(snap)
            var status_names = Object.keys(snap[hw_names[0]])
            hw_names.sort()
            var overview_names = hw_names.slice(0, 5)
            var status = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]
            console.log(snap[overview_names[0]])
            console.log(status_names)

            for (var i = 0; i < overview_names.length; i++) {
                status[0].push(snap[overview_names[i]]['Accepted'])
                status[1].push(snap[overview_names[i]]['Compile Error'])
                status[2].push(snap[overview_names[i]]['Partial Accepted'])
                status[3].push(snap[overview_names[i]]['Runtime Error'])
                status[4].push(snap[overview_names[i]]['Pending'])
                status[5].push(snap[overview_names[i]]['Time Limit Exceeded'])
                status[6].push(snap[overview_names[i]]['Wrong Answer'])

            }
            for (var i = 0; i < status.length; i++) {
                console.log(status[i])

            }

            chart2 = createChart(ctx2, overview_names, status)
        }

    );

    var ctx3 = document.getElementById("sixChartTwo");
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var hw_names = Object.keys(snap)
            var status_names = Object.keys(snap[hw_names[0]])
            hw_names.sort()
            var overview_names = hw_names.slice(5, 10)
            var status = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]
            console.log(snap[overview_names[0]])
            console.log(status_names)

            for (var i = 0; i < overview_names.length; i++) {
                status[0].push(snap[overview_names[i]]['Accepted'])
                status[1].push(snap[overview_names[i]]['Compile Error'])
                status[2].push(snap[overview_names[i]]['Partial Accepted'])
                status[3].push(snap[overview_names[i]]['Runtime Error'])
                status[4].push(snap[overview_names[i]]['Pending'])
                status[5].push(snap[overview_names[i]]['Time Limit Exceeded'])
                status[6].push(snap[overview_names[i]]['Wrong Answer'])

            }
            for (var i = 0; i < status.length; i++) {
                console.log(status[i])

            }

            chart3 = createChart(ctx3, overview_names, status)
        }

    );

    var ctx4 = document.getElementById("sixChartThree");
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var hw_names = Object.keys(snap)
            var status_names = Object.keys(snap[hw_names[0]])
            hw_names.sort()
            var overview_names = hw_names.slice(10, 15)
            var status = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]
            console.log(snap[overview_names[0]])
            console.log(status_names)

            for (var i = 0; i < overview_names.length; i++) {
                status[0].push(snap[overview_names[i]]['Accepted'])
                status[1].push(snap[overview_names[i]]['Compile Error'])
                status[2].push(snap[overview_names[i]]['Partial Accepted'])
                status[3].push(snap[overview_names[i]]['Runtime Error'])
                status[4].push(snap[overview_names[i]]['Pending'])
                status[5].push(snap[overview_names[i]]['Time Limit Exceeded'])
                status[6].push(snap[overview_names[i]]['Wrong Answer'])

            }
            for (var i = 0; i < status.length; i++) {
                console.log(status[i])

            }

            chart4 = createChart(ctx4, overview_names, status)
        }

    );

    var ctx5 = document.getElementById("sixChartFour");
    var len
    var arr5 = [];
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            var hw_names = Object.keys(snap)
            var status_names = Object.keys(snap[hw_names[0]])
            hw_names.sort()
            var overview_names = hw_names.slice(15, 20)
            var status = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]
            console.log(snap[overview_names[0]])
            console.log(status_names)

            for (var i = 0; i < overview_names.length; i++) {
                status[0].push(snap[overview_names[i]]['Accepted'])
                status[1].push(snap[overview_names[i]]['Compile Error'])
                status[2].push(snap[overview_names[i]]['Partial Accepted'])
                status[3].push(snap[overview_names[i]]['Runtime Error'])
                status[4].push(snap[overview_names[i]]['Pending'])
                status[5].push(snap[overview_names[i]]['Time Limit Exceeded'])
                status[6].push(snap[overview_names[i]]['Wrong Answer'])

            }
            for (var i = 0; i < status.length; i++) {
                console.log(status[i])

            }

            chart5 = createChart(ctx5, overview_names, status)
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