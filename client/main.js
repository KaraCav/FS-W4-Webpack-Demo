const clicker = document.getElementById('clicker')

clicker.addEventListener('click', function(e) {
  console.log('click')
  click()
})

setInterval(function() {
  let x = Math.random() * 700
  let y = Math.random() * 700
  clicker.style.left = `${x}px`
  clicker.style.top = `${y}px`
}, 1000)
