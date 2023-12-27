const numbers = document.querySelectorAll('.numbers span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const reply = document.querySelector('#reply')

runAnimation()

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  numbers.forEach((num) => {
    num.classList.value = ''
  })

  numbers[0].classList.add('in')
}

function runAnimation() {
  numbers.forEach((num, idx) => {
    const nextToLast = numbers.length - 1

    // 'animationend' is a js event, it is triggered after the CSS animation has completed
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})
