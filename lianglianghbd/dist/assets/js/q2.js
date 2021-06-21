document.getElementById('q2').classList.add('active')
document.getElementById('q2').classList.remove('disabled')
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
    if (document.getElementById('answer').value == '3801202') {
        firebase.database().ref('question').update({ q2: 1 })
        document.getElementById('q3').classList.add('active')
        document.getElementById('q3').classList.remove('disabled')
        document.getElementById('q2').classList.remove('active')
        var q1icon = document.getElementById('q2').childNodes[1]['firstElementChild'].classList
        q1icon.remove('bi-x')
        q1icon.add('bi-check')

    } else {
        alert('n')
    }
}