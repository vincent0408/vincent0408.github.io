document.getElementById('q8').classList.add('active')
document.getElementById('q8').classList.remove('disabled')
firebase.database().ref().on('value', snapshot => {
    var snap = snapshot.val()['question']
    var question = Object.keys(snap)
    var status = Object.values(snap)

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
    if (document.getElementById('answer').value == '1101') {
        firebase.database().ref('question').update({ q8: 1 })
        document.getElementById('secret').classList.add('active')
        document.getElementById('secret').classList.remove('disabled')
        document.getElementById('q8').classList.remove('active')

        var q1icon = document.getElementById('q8').childNodes[1]['firstElementChild'].classList
        q1icon.remove('bi-x')
        q1icon.add('bi-check')

    } else {
        alert('n')
    }
}
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