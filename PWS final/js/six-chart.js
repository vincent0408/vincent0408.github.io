// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function createChart(ctx, col, arr) {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time_series,
            datasets: [{
                label: "還不是啥",
                lineTension: 0.3,
                backgroundColor: col,
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: arr
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
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return '$' + number_format(value);
                        }
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
                callbacks: {
                    label: function(tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
                    }
                }
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

function DrawSixCharts(col) {
    var ctx1 = document.getElementById("sixChartOne");
    // var user = localStorage['User'];
    var user = 'b06703012'
    var len
    var arr1 = [];

    chart.database().ref().on('value', snapshot => {

            if (chart1) {
                // let snap = snapshot.val()
                // time_series = Object.keys(snap)
                // time_series.sort()
                // len = time_series.length
                // for (var i = 0; i < len; i++) {
                //     arr1.push(snap[time_series[i]]['b06703042'])
                // }
                // console.log(arr1)
                // chart1.data.datasets[0].data = arr1
                chart1.data.datasets[0].data = rdten()
                chart1.data.datasets[0].backgroundColor = col
                chart1.update()
            } else {
                let snap = snapshot.val()
                time_series = Object.keys(snap)
                time_series.sort()
                len = time_series.length
                for (var i = 0; i < len; i++) {
                    arr1.push(snap[time_series[i]][user])
                }
                chart1 = createChart(ctx1, col, arr1)
            }
        }

    );
    var ctx2 = document.getElementById("sixChartTwo");
    var len
    var arr2 = [];
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            time_series = Object.keys(snap)
            time_series.sort()
            len = time_series.length
            if (chart2) {
                chart2.data.datasets[0].backgroundColor = col
                chart2.data.datasets[0].data = rdten()
                chart2.update()
            } else {
                let snap = snapshot.val()
                time_series = Object.keys(snap)
                time_series.sort()
                len = time_series.length
                for (var i = 0; i < len; i++) {
                    arr2.push(snap[time_series[i]][user])
                }
                chart2 = createChart(ctx2, col, arr2)
            }
        }

    );

    var ctx3 = document.getElementById("sixChartThree");
    var len
    var arr3 = [];
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            time_series = Object.keys(snap)
            time_series.sort()
            len = time_series.length
            if (chart3) {
                chart3.data.datasets[0].backgroundColor = col
                chart3.data.datasets[0].data = rdten()
                chart3.update()
            } else {
                let snap = snapshot.val()
                time_series = Object.keys(snap)
                time_series.sort()
                len = time_series.length
                for (var i = 0; i < len; i++) {
                    arr3.push(snap[time_series[i]][user])
                }
                chart3 = createChart(ctx3, col, arr3)
            }
        }

    );

    var ctx4 = document.getElementById("sixChartFour");
    var len
    var arr4 = [];
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            time_series = Object.keys(snap)
            time_series.sort()
            len = time_series.length
            if (chart4) {
                chart4.data.datasets[0].backgroundColor = col
                chart4.data.datasets[0].data = rdten()
                chart4.update()
            } else {
                let snap = snapshot.val()
                time_series = Object.keys(snap)
                time_series.sort()
                len = time_series.length
                for (var i = 0; i < len; i++) {
                    arr4.push(snap[time_series[i]][user])
                }
                chart4 = createChart(ctx4, col, arr4)
            }
        }

    );

    var ctx5 = document.getElementById("sixChartFive");
    var len
    var arr5 = [];
    chart.database().ref().on('value', snapshot => {
            let snap = snapshot.val()
            time_series = Object.keys(snap)
            time_series.sort()
            len = time_series.length
            if (chart5) {
                chart5.data.datasets[0].backgroundColor = col
                chart5.data.datasets[0].data = rdten()
                chart5.update()
            } else {
                let snap = snapshot.val()
                time_series = Object.keys(snap)
                time_series.sort()
                len = time_series.length
                for (var i = 0; i < len; i++) {
                    arr5.push(snap[time_series[i]][user])
                }
                chart5 = createChart(ctx5, col, arr5)
            }
        }

    );

    var ctx6 = document.getElementById("sixChartSix");
    var len
    var arr6 = [];
    chart.database().ref().on('value', snapshot => {
        let snap = snapshot.val()
        time_series = Object.keys(snap)
        time_series.sort()
        len = time_series.length
        if (chart6) {
            chart6.data.datasets[0].backgroundColor = col
            chart6.data.datasets[0].data = rdten()
            chart6.update()
        } else {
            let snap = snapshot.val()
            time_series = Object.keys(snap)
            time_series.sort()
            len = time_series.length
            for (var i = 0; i < len; i++) {
                arr6.push(snap[time_series[i]][user])
            }
            chart6 = createChart(ctx6, col, arr6)
        }

    })
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