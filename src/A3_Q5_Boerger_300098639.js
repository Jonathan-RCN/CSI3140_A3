var posTur;
var prevPosTur;
var posHar;
var prevPosHar;
var positionArray;
var displayArray;
var raceflag;
var count;
var totalTorDist;
var totalHarDist;

function printPostion(positionArray) {
  displayArray="";
  for (i=0; i<positionArray.length;i++){
    displayArray += positionArray[i] + "  ";
  }
  document.getElementById("positionArray").innerHTML = "";
  document.getElementById("positionArray").innerHTML = displayArray;
}

function turtuleMove (posTur){
  var rnum = Math.floor(1+ Math.random()*10);
  var posChange=0;
  if (rnum <= 5){
    //document.getElementById("turMove").innerHTML = "Turtle move: Fast plod."
    posChange= 3;
  } else if (rnum <=7){
    //document.getElementById("turMove").innerHTML = "Turtle move: Slip."
    posChange = -6;
  }else if (rnum <=10){
    //document.getElementById("turMove").innerHTML = "Turtle move: Slow plod."
    posChange=  1 ;
  }
  totalTorDist += Math.abs(posChange);
  if (posChange + posTur < 1){
    return 1;
  }else if (posChange + posTur >70){
    return 72;
  }else {
    return posChange + posTur;
  }
}

function hareMove(posHar){
  var rnum = Math.floor(1+ Math.random()*10);
  var posChange=0;
  if (rnum <= 2){
    //document.getElementById("harMove").innerHTML = "Hare move: Sleep."
  } else if (rnum <=4){
    //document.getElementById("harMove").innerHTML = "Hare move: Big jump."
    posChange= 9;
  }else if (rnum <=5){
    //document.getElementById("harMove").innerHTML = "Hare move: Big slip."
    posChange = -12;
  }else if (rnum <=8){
    //document.getElementById("harMove").innerHTML = "Hare move: Small jump."
    posChange = 1;
  }else if (rnum <=10){
    //document.getElementById("harMove").innerHTML = "Hare move: Small slip."
    posChange = -2 ;
  }
  totalHarDist += Math.abs(posChange);
  if (posChange + posHar < 1){
    return 1;
  }else if (posChange + posHar >70) {
    return 72;
  }else {
    return posChange + posHar;
  }

}

function startMessage(){

  document.getElementById("startMsg").innerHTML="ON YOUR MARK, GET SET";
  setTimeout(function(){document.getElementById("startMsg").innerHTML="BANG!!" }, 2000);
  setTimeout(function () {document.getElementById("startMsg").innerHTML="AND THEY'RE OFF" }, 2500);
  setTimeout(function () {document.getElementById("startMsg").innerHTML=""; raceflag=1;}, 3250);



}

function validatePostMove(posTur, posHar, myint, count){
  if (posTur >=72 || posHar >=72){
    if (posTur >= 72 && posHar >= 72){
      //document.getElementById("positionArray").innerHTML="";
      document.getElementById("winner").innerHTML="IT'S A TIE!"
      clearInterval(myint);
      raceOver(count);
    } else if (posTur >=72) {
      //document.getElementById("positionArray").innerHTML = "";
      document.getElementById("winner").innerHTML = "TURTOISE WINS!!! YAY!!"
      clearInterval(myint);
      raceOver(count);
    }else{
      //document.getElementById("positionArray").innerHTML="";
      document.getElementById("winner").innerHTML="HARE WINS. YUCK!"
      clearInterval(myint);
      raceOver(count);
    }
  }
  positionArray[prevPosTur]='&nbsp';
  positionArray[prevPosHar]='&nbsp';
  if (posHar===posTur) {
    if (posHar ===72 || posHar ===1){
      positionArray[posHar] = "H//T"
    }else {
      positionArray[posHar] = "OUCH"
    }
  } else {
    positionArray[posHar]='H';
    positionArray[posTur]='T';
  }
  prevPosTur=posTur;
  prevPosHar=posHar;
}

function turn(count, myint){
  posTur=turtuleMove(posTur);
  posHar= hareMove(posHar);
  validatePostMove(posTur, posHar, myint,count);
  printPostion(positionArray);


}


function main() {

  posTur=1;
  prevPosTur=1;
  posHar=1;
  prevPosHar=1;
  positionArray = [];
  displayArray= '';
  raceflag =0;
  count = 1;
  totalTorDist =0;
  totalHarDist =0;

  for (i =0; i <73; i++){
    positionArray.push("&nbsp");
  }
  positionArray[0]="||";
  positionArray[71]="||";


  var simulationSpeed = document.getElementById("simSpeed").value;
  document.getElementById("label").style.visibility="hidden";
  document.getElementById("start").style.visibility="hidden";
  document.getElementById("simSpeed").style.visibility="hidden";
  document.getElementById("positionArray").style.visibility="hidden";
  document.getElementById("winner").style.visibility="hidden";
  document.getElementById("endStats").style.visibility="hidden";
  startMessage();

  var myint = setInterval(function (){
    if (raceflag ===1) {
      clearInterval(myint);
      document.getElementById("positionArray").style.visibility="visible";
      document.getElementById("winner").style.visibility="visible";
      document.getElementById("winner").innerHTML="";
      var myint = setInterval(function () {turn(count, myint); count++}, simulationSpeed *1000);
      raceflag=0;
    }
  }, 100);
}

function raceOver(count){
  document.getElementById("label").style.visibility="visible";
  document.getElementById("start").style.visibility="visible";
  document.getElementById("simSpeed").style.visibility="visible";
  document.getElementById("endStats").style.visibility="visible";
  var endStats = document.getElementById("endStats");
  endStats.innerHTML = "Time elapsed:  " + count +" seconds" +"<br>";
  endStats.innerHTML += "Final position of the tortoise: " + posTur +"<br>";
  endStats.innerHTML += "Final position of the hare: " + posHar +"<br>";
  endStats.innerHTML += "Total distance travelled by the tortoise: " + totalTorDist +"<br>";
  endStats.innerHTML += "Total distance travelled by the hare: " + totalHarDist +"<br>";


}
