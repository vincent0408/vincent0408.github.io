var blocks = document.getElementsByClassName('h5 mb-0 font-weight-bold text-gray-800')
var user = localStorage['User'];
localStorage.removeItem('User');
console.log(user)

username_display = document.getElementsByClassName('mr-2 d-none d-lg-inline text-gray-600 small')[0]
username_display.textContent = user

firebase.database().ref().on('value', snapshot => {
    let snap = snapshot.val()
    var columns = Object.keys(snap[1])

    for (var i = 0; i < columns.length; i++) {
        blocks[i].textContent = snap[1][columns[i]]

    }

});