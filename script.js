
function getRandomColor2() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 12)];
  }
  return color;
}

const timerNum = prompt("write a number");



for (var i=timerNum; i >= 0;i--){
   setTimeout('setV('+i+',"Out")',1000*(timerNum-i));
}



function setV(c,t){
  document.getElementById("timer").innerHTML = c;
  document.body.style.backgroundImage = `linear-gradient(to bottom right,${getRandomColor()},${getRandomColor2()})`;

  if (c === 0) {
    document.getElementById("timer").innerHTML = "Time Out";
  }
}
