const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1

// the speed less, the text will be typed faster
let speed = 300 / speedEl.value

writeText()

function writeText() {
  // the usage of slice: slice(0, 1), extract element from index0 to index1(excluding index 3)
  textEl.innerText = text.slice(0, idx)

  idx++

  if (idx > text.length) {
    idx = 1
  }

  // the delay time is determined by the speed variable, 
  setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)