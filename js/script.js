function refreshTime() {
  var dateString = new Date().toLocaleString("ro-RO", {timeZone: "Europe/Bucharest"});
  var formattedString = dateString.replace(", ", " - ");
  document.getElementById("dataOra").innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

function url(){
document.getElementById("url").innerHTML =
"Page location is " + window.location.href;
}