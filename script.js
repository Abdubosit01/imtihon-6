let car = document.querySelector('.car')


let buttons = [
  document.querySelector('.btn1'),
  document.querySelector('.btn2'),
  document.querySelector('.btn3'),
  document.querySelector('.btn4'),
  document.querySelector('.btn5'),
  document.querySelector('.btn6'),
  document.querySelector('.btn7'),
  document.querySelector('.btn8'),
  document.querySelector('.btn9'),
  document.querySelector('.btn10') 
]


buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    car.innerText += (index + 1) % 10 
  })
})

let qosh = document.querySelector('.qoshish')
let ayir = document.querySelector('.ayirish')
let kopaytir = document.querySelector('.Kopaytirish')
let bol = document.querySelector('.bolish')
let ochirish = document.querySelector('.ochirish')
let javob = document.querySelector('.javob')


qosh.addEventListener('click', () => car.innerText += '+')
ayir.addEventListener('click', () => car.innerText += '-')
kopaytir.addEventListener('click', () => car.innerText += '*')
bol.addEventListener('click', () => car.innerText += '/')


ochirish.addEventListener('click', () => car.innerText = '')


javob.addEventListener('click', () => {
  try {
    car.innerText = eval(car.innerText)
  } catch (e) {
    car.innerText = 'Xatolik'
  }
})



















