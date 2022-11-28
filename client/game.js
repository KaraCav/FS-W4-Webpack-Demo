let numTimesClicked = 0
let counter = document.getElementById('#count');

function win() {
  alert('You win!')
  reset()
}

function reset() {
  numTimesClicked = 0
}

function click() {
  numTimesClicked++
//  counter.textContent = numTimesClicked;
  if (numTimesClicked === 5) {
    win()
  }
}
