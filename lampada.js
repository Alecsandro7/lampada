const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isBrokenLamp() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isBrokenLamp()) {
    lamp.src = "./img/ligada.png";
  }
}

function lampOff() {
  if (!isBrokenLamp()) {
    lamp.src = "./img/desligada.png";
  }
}

function brokenLamp() {
  lamp.src = "./img/quebrada.png";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("dblclick", brokenLamp);
