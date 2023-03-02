var button = document.querySelector("button");
var timerBox = document.querySelector(".timer");


function start() {
  countingTime();
  button.innerHTML = "<ion-icon class='button-icon' name='hand'></ion-icon>stop";
  button.style.opacity = "0";


}

function pause() {
  clearInterval(chronometer);
  button.innerHTML = "<ion-icon class='button-icon' name='checkmark-circle'></ion-icon>close";
  button.style.opacity = "1";
}


function reset() {
  convertToMilliseconds();
  insertTimeOnArray();
  insertTimeOnTheTable();

  timerBox.innerHTML = "<span class='minute'>00</span>:<span class='second'>00</span>:<span class='millisecond'>00</span>";

  minute = second = millisecond = 0;

  button.innerHTML = "<ion-icon class='button-icon' name='time'></ion-icon>start"
}



button.addEventListener('click', () => {
  if(button.textContent == 'start') start();
  else if(button.textContent == 'stop') pause();
  else if (button.textContent == 'close') reset();
});



document.addEventListener('keyup', e => {
  if(e.keyCode == 32) {
    if (button.textContent == 'start') start();
    else if(button.textContent == 'stop') pause();
    else if(button.textContent == 'close') reset();
  }
});




