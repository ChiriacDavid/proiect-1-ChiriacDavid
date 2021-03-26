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

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("loc").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("loc").innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function info(){
  refreshTime();
  url();
  getLocation();
}