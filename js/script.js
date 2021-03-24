function refreshTime() {
  var dateString = new Date().toLocaleString("ro-RO", {timeZone: "Europe/Bucharest"});
  var formattedString = dateString.replace(", ", " - ");
  document.getElementById("Info").innerHTML = formattedString;
}

setInterval(refreshTime, 1000);
