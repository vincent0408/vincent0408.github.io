var fadeTarget = document.getElementById("forest");
document.getElementById('q7').classList.add('active')
document.getElementById('q7').classList.remove('disabled')
firebase.database().ref().on('value', snapshot => {
    var snap = snapshot.val()['question']
    var question = Object.keys(snap)
    var status = Object.values(snap)
    console.log(status)
    if (status['6'] === 0) {
        fadeTarget.style.visibility = 'visible'
    }
    for (let i = 0; i < question.length; i++) {
        if (status[i] == 1) {
            if (i != question.length - 1) {
                document.getElementById(question[i]).classList.remove('disabled')
                var icon = document.getElementById(question[i]).childNodes[1]['firstElementChild'].classList
                icon.remove('bi-x')
                icon.add('bi-check')

            } else {
                document.getElementById(question[i]).classList.remove('disabled')
                var icon = document.getElementById(question[i]).childNodes[1]['firstElementChild'].classList

            }
        }

    }

})

document.getElementById('submit').onclick = function() {
    if (Math.abs(document.getElementById('answer').value - 1) === 0) {

        var fadeEffect = setInterval(function() {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 200);

        firebase.database().ref('question').update({ q7: 1 })
        document.getElementById('q8').classList.add('active')
        document.getElementById('q8').classList.remove('disabled')
        document.getElementById('q7').classList.remove('active')

        var q1icon = document.getElementById('q7').childNodes[1]['firstElementChild'].classList
        q1icon.remove('bi-x')
        q1icon.add('bi-check')


        firebase.database().ref('question').update({ q8: 1 })
    };

}

var ctx = document.getElementById('pie1')
var submit_chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            '妳',
            'Pass',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [37, 63],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 16,

            }
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
        }
    },
});

var ctx = document.getElementById('pie2')
var submit_chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'Pass',
            '妳',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [36, 64],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',

            labels: {
                fontSize: 16,
            }
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
            // callbacks: {
            //     label: function(tooltipItem, data) {
            //         //get the concerned dataset
            //         var dataset = data.datasets[tooltipItem.datasetIndex];
            //         //calculate the total of this data set
            //         var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            //             return previousValue + currentValue;
            //         });
            //         //get the current items value
            //         var currentValue = dataset.data[tooltipItem.index];
            //         //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
            //         var percentage = Math.floor(((currentValue / total) * 100) + 0.5);

            //         return tooltipItem.datasetIndex + percentage + "%";
            //     }
            // }
        }
    }
});