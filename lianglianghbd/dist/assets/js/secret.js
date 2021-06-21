document.getElementById('secret').classList.add('active')
document.getElementById('secret').classList.remove('disabled')
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