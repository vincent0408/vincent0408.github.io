// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const HW_NO = 4

function createChart(ctx, label, data, title, col) {
    var myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
            labels: label,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: 'rgba(255, 155, 0, 0.2)',
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

                }, ],

                yAxes: [{
                    ticks: {
                        padding: 10,
                    },
                }],
            },

            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.labels[tooltipItem.index];
                        return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                    }
                }
            }


        }

    });
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

function getLabel(hw) {

    return new Promise((resolve, reject) => {
        firebase.database().ref().on('value', snapshot => {
            var snap = snapshot.val()
            let hw_interval = []
            let label_interval = Object.keys(snap)
            for (let i = 0; i < label_interval.length; i++) {
                hw_interval.push(snap[label_interval[i]][hw])
            }

            resolve(hw_interval)
        })

    })
}

function getBarNo(interval, no) {
    for (let i = 0; i < interval.length; i++) {
        if (no <= interval[i]) {
            return i
        }
    }
}

function DrawSixCharts() {
    var ctx1 = document.getElementById("overview");
    // var user = localStorage['User'];
    const user = 'b06703012'

    chart.database().ref().on('value', async snapshot => {
            let snap = snapshot.val()
            var students = Object.keys(snap)
            var data = []
            var counts = {};
            for (let i = 0; i < students.length; i++) {
                var ac_rate = +(snap[students[i]]['HW1-1 AC rate']).toFixed(4)
                var submit = snap[students[i]]['HW1-1 Submit count']

                data.push({ x: submit, y: ac_rate })
            }
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let x = data[i].x
                let y = data[i].y

                if (counts[x] === undefined) {
                    counts[x] = {}
                    counts[x][y] = 1
                } else {
                    if (counts[x][y] === undefined) {
                        counts[x][y] = 1
                    } else {
                        counts[x][y] += 1
                    }
                }
            }

            console.log(counts)
            for (let i = 0; i < students.length; i++) {
                data[i].r = counts[data[i].x][data[i].y] + 4
            }
            console.log(data)
            chart1 = createChart(ctx1, students, data, 'HW1-1', 'red')
        }


    );

    // var ctx2 = document.getElementById("sixChartOne");
    // chart.database().ref().on('value', async snapshot => {
    //         let snap = snapshot.val()
    //         let droplist = document.getElementById('dropdown-button')

    //         var hw_interval = await getLabel('HW' + droplist.textContent.trim().slice(-1) + '-2')
    //         var students = Object.keys(snap)
    //         let interval = hw_interval.slice(-1)[0]
    //         let hw = hw_interval.slice(0, -1)
    //         let labels = []
    //         for (let i = 0; i < hw_interval.length - 1; i++) {
    //             labels.push((interval * (i + 1)).toFixed(2))
    //         }
    //         var submit = snap[user]['HW' + droplist.textContent.trim().slice(-1) + '-2' + ' Submit count']

    //         let col = []
    //         for (let i = 0; i < hw.length; i++) {
    //             col.push('gold')
    //         }
    //         col[getBarNo(labels, submit)] = 'orange'
    //         if (chart2) {
    //             chart2.data.datasets[0].data = hw
    //             chart2.data.labels = labels
    //             chart2.data.datasets[0].backgroundColor = col


    //             chart2.update();
    //         } else {
    //             chart2 = createChart(ctx2, labels, hw, '', col)
    //         }
    //     }

    // );

    // var ctx3 = document.getElementById("sixChartTwo");
    // chart.database().ref().on('value', async snapshot => {
    //         let snap = snapshot.val()
    //         let droplist = document.getElementById('dropdown-button')

    //         var hw_interval = await getLabel('HW' + droplist.textContent.trim().slice(-1) + '-3')
    //         var students = Object.keys(snap)
    //         let interval = hw_interval.slice(-1)[0]
    //         let hw = hw_interval.slice(0, -1)
    //         let labels = []
    //         for (let i = 0; i < hw_interval.length - 1; i++) {
    //             labels.push((interval * (i + 1)).toFixed(2))
    //         }
    //         var submit = snap[user]['HW' + droplist.textContent.trim().slice(-1) + '-3' + ' Submit count']

    //         let col = []
    //         for (let i = 0; i < hw.length; i++) {
    //             col.push('gold')
    //         }
    //         col[getBarNo(labels, submit)] = 'orange'
    //         if (chart3) {
    //             chart3.data.datasets[0].data = hw
    //             chart3.data.labels = labels
    //             chart3.data.datasets[0].backgroundColor = col


    //             chart3.update();
    //         } else {
    //             chart3 = createChart(ctx3, labels, hw, '', col)
    //         }
    //     }

    // );

    // var ctx4 = document.getElementById("sixChartThree");
    // chart.database().ref().on('value', async snapshot => {
    //         let snap = snapshot.val()
    //         let droplist = document.getElementById('dropdown-button')

    //         var hw_interval = await getLabel('HW' + droplist.textContent.trim().slice(-1) + '-4')
    //         var students = Object.keys(snap)
    //         let interval = hw_interval.slice(-1)[0]
    //         let hw = hw_interval.slice(0, -1)
    //         let labels = []
    //         for (let i = 0; i < hw_interval.length - 1; i++) {
    //             labels.push((interval * (i + 1)).toFixed(2))
    //         }
    //         var submit = snap[user]['HW' + droplist.textContent.trim().slice(-1) + '-4' + ' Submit count']

    //         let col = []
    //         for (let i = 0; i < hw.length; i++) {
    //             col.push('gold')
    //         }
    //         col[getBarNo(labels, submit)] = 'orange'
    //         if (chart4) {
    //             chart4.data.datasets[0].data = hw
    //             chart4.data.labels = labels
    //             chart4.data.datasets[0].backgroundColor = col


    //             chart4.update();
    //         } else {
    //             chart4 = createChart(ctx4, labels, hw, '', col)
    //         }
    //     }

    // );

    // var ctx5 = document.getElementById("sixChartFour");
    // chart.database().ref().on('value', async snapshot => {
    //         let snap = snapshot.val()
    //         let droplist = document.getElementById('dropdown-button')

    //         var hw_interval = await getLabel('HW' + droplist.textContent.trim().slice(-1) + '-5')
    //         var students = Object.keys(snap)
    //         let interval = hw_interval.slice(-1)[0]
    //         let hw = hw_interval.slice(0, -1)
    //         let labels = []
    //         for (let i = 0; i < hw_interval.length - 1; i++) {
    //             labels.push((interval * (i + 1)).toFixed(2))
    //         }
    //         var submit = snap[user]['HW' + droplist.textContent.trim().slice(-1) + '-5' + ' Submit count']

    //         let col = []
    //         for (let i = 0; i < hw.length; i++) {
    //             col.push('gold')
    //         }
    //         col[getBarNo(labels, submit)] = 'orange'
    //         if (chart5) {
    //             chart5.data.datasets[0].data = hw
    //             chart5.data.labels = labels
    //             chart5.data.datasets[0].backgroundColor = col


    //             chart5.update();
    //         } else {
    //             chart5 = createChart(ctx5, labels, hw, '', col)
    //         }
    //     }

    // );

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





DrawSixCharts("red");
var colors = ["red", "yellow", "green", "blue", "purple", "black"]

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

hw_total.textContent = ("Homework 1 01");
hw_01.textContent = ("Homework 1 02");
hw_02.textContent = ("Homework 1 03");
hw_03.textContent = ("Homework 1 04");
hw_04.textContent = ("Homework 1 05");
hw_05.textContent = ("Homework 1 06")

function ChangeHWName(hw) {
    dropdown_button.textContent = hw.textContent;

    hw_total.textContent = (hw.textContent + " 01")
    hw_01.textContent = (hw.textContent + " 02")
    hw_02.textContent = (hw.textContent + " 03")
    hw_03.textContent = (hw.textContent + " 04")
    hw_04.textContent = (hw.textContent + " 05")
    hw_05.textContent = (hw.textContent + " 06")

}

function HWButtonFunc(hw, col) {
    ChangeHWName(hw)
    DrawSixCharts(col)
}