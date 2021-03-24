var blocks = document.getElementsByClassName('h5 mb-0 font-weight-bold text-gray-800')
var user = localStorage['User'];
localStorage.removeItem('User');
console.log(user)

firebase.database().ref().on('value', snapshot => {
    let snap = snapshot.val()
    var columns = Object.keys(snap[1])
    console.log(columns)
    for (var i = 0; i < snap.lengths; i++) {
        blocks[i].textContent = snap[1][columns[i]]

    }

    // Object.keys(snap).forEach(function(key) {
    //     console.log('Key : ' + key + ', Value : ' + snap[key])
    // })

});