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

function browser(){
  document.getElementById("brow").innerHTML =
  "Name and version of the Browser: " + navigator.appVersion;
}

function os(){
  var detectedOS = "Unknown OS";

  if (navigator.appVersion.indexOf("Mac") != -1) 
    detectedOS = "MacOS";

  if (navigator.appVersion.indexOf("Win") != -1) 
    detectedOS = "Windows";

  if (navigator.appVersion.indexOf("Linux") != -1) 
    detectedOS = "Linux";
    
  document.getElementById("OS").innerHTML=
  "Operating system is: " + detectedOS;
}

function info(){
  refreshTime();
  url();
  getLocation();
  browser();
  os();
}

function extragere(){
  var nr=0;
  var numere = [];
  var citite = [];

  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for(i=1;i<=8;i++){
    numere[i] = hexRef[Math.floor(Math.random()*16)]+hexRef[Math.floor(Math.random()*16)];
      for(j=0;j<i;j++){
        while(numere[i]==numere[j]){
          numere[i] = hexRef[Math.floor(Math.random()*16)]+hexRef[Math.floor(Math.random()*16)];
        }
      }
  }
  citite=document.getElementById("formular").elements;
  for(i=1;i<=8;i++){
    for(j=1;j<=8;j++){
      if(citite.item(i)==numere[j]){
        nr++;
      }
    }
  }
  alert(citite[1]);
  alert("numerele extrase sunt: "+numere[1] +","+numere[2]+","+numere[3]+","
      +numere[4]+","+numere[5]+","+numere[6]+","+numere[7]+","+numere[8])
}