document.getElementById('q7').classList.add('active')
document.getElementById('q7').classList.remove('disabled')
firebase.database().ref().on('value', snapshot => {
    var snap = snapshot.val()['question']
    var question = Object.keys(snap)
    var status = Object.values(snap)
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

document.getElementById('reset').onclick = function() {
    firebase.database().ref().on('value', snapshot => {
        var snap = snapshot.val()['question']
        var question = Object.keys(snap)
        var status = Object.values(snap)
        for (let i = 0; i < question.length; i++) {
            firebase.database().ref('question').update({ q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0 })

        }
    })

}



function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
    checkStatus();
}

function shuffle() {
    //Use nested loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
        for (var column = 1; column <= 3; column++) { //For each column in this row

            var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
            var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

            swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
        }
    }
}

function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;

    if (tile != "tile9") {
        //Checking if white tile on the right
        if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }
        //Checking if white tile is above
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }
        //Checking if white tile is below
        if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }

}
shuffle()

function checkStatus() {
    if (document.getElementById('cell11').className === 'tile1') {
        if (document.getElementById('cell12').className === 'tile2') {
            if (document.getElementById('cell13').className === 'tile3') {
                if (document.getElementById('cell21').className === 'tile4') {
                    if (document.getElementById('cell22').className === 'tile5') {
                        if (document.getElementById('cell23').className === 'tile6') {
                            if (document.getElementById('cell31').className === 'tile7') {
                                if (document.getElementById('cell32').className === 'tile8') {
                                    if (document.getElementById('cell33').className === 'tile9') {
                                        document.getElementById('cell33').className = 'tile9-1'
                                        alert('冰箱')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}