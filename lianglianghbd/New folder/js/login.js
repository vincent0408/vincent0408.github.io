document.getElementById('loginbt').onclick = function() {
    var studentid = document.getElementById('studentid')
    var bd = document.getElementById('bd')
    var status = document.getElementById('status')

    if (studentid.value.toLowerCase() === 'b06703128' && bd.value === '880620') {
        window.location.href = './question-main.html'
    } else {
        status.textContent = '有錯欸妳是誰 (◜◔。◔◝)'
    }
}