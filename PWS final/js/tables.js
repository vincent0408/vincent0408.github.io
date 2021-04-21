var fragment = document.getElementById("dataTable")
var table = document.createElement("tbody");


var query = firebase.database().ref();
var title = ['Author', 'HW', 'ID', 'Language', 'Memory', 'Problem', 'Status', 'Time', 'When']



query.once("value").then(function(snapshot) {
    var trValues = Object.values(snapshot.val())


    for (var i = 0; i < trValues.length; i++) {
        var tr = document.createElement("tr");

        for (var j = 0; j < title.length; j++) {
            var td = document.createElement("td");
            td.textContent = trValues[i][title[j]];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    fragment.appendChild(table);

    $(document).ready(function() {
        $('#dataTable').DataTable({

        });
    });

})