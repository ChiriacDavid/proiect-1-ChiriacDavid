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
  citite[1]=document.getElementById("1").value;
  citite[2]=document.getElementById("2").value;
  citite[3]=document.getElementById("3").value;
  citite[4]=document.getElementById("4").value;
  citite[5]=document.getElementById("5").value;
  citite[6]=document.getElementById("6").value;
  citite[7]=document.getElementById("7").value;
  citite[8]=document.getElementById("8").value;
  for(i=1;i<=8;i++){
    for(j=1;j<=8;j++){
      if(citite[i]==numere[j]){
        nr++;
      }
    }
  }
  document.getElementById("NrGhicite").innerHTML="<br><br>" + "Numerele extrase sunt: "+numere[1] +","+numere[2]+","+numere[3]+","
  +numere[4]+","+numere[5]+","+numere[6]+","+numere[7]+","+numere[8]+"<br><br>"+"Ati ghicit "+nr+" numere!!! <br><br>";
}


function draw(){
  var c = document.getElementById("myCanvas");
  const canvas = c.getContext("2d");
  canvas.clearRect(0,0,c.clientWidth,c.height);
  var ctx = c.getContext("2d");
  var ctx2 = c.getContext("2d");
  ctx2.strokeStyle=document.getElementById("Contur").value;
  ctx2.strokeRect(20,20,150,100);
  ctx.fillStyle = document.getElementById("Umplere").value;
  ctx.fillRect(20, 20, 150, 100);
}


/*var clicknr=0;
function draw() {
  var c = document.getElementById("myCanvas");
  if(clicknr==0){
    clicknr=1;
    x1=evt.clientX;
    y1=evt.clientY;
  }
  else if(clicknr==1){
    clicknr=2;
    x2=evt.clientX;
    y2=evt.clientY;
    var ctx = c.getContext("2d");
    var ctx2 = c.getContext("2d");
    ctx2.strokeStyle=document.getElementById("Contur").value;
    ctx2.strokeRect(x1,y2,x2-x1,y2-y1);
    ctx.fillStyle = document.getElementById("Umplere").value;
    ctx.fillRect(x1,y2,x2-x1,y2-y1);
  }
  else if(clicknr=2){
    clicknr=0;
    const canvas = c.getContext("2d");
    canvas.clearRect(0,0,c.width,c.height);
  }

}

document.addEventListener("click", draw);*/
