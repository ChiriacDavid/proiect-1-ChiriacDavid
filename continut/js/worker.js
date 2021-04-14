localStorage.onchange=function(){
    function myFunction() {
    var table = document.getElementById("listaCumparaturi");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var row = table.insertRow(tbodyRowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = localStorage.getItem('id');
    cell2.innerHTML = localStorage.getItem('numeProdus');
    cell3.innerHTML = localStorage.getItem('cantitate');
}
}