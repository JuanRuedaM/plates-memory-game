const letters = document.querySelector("#letters")
const numbers = document.querySelector("#numbers")
const btnGenerate = document.querySelector(".btnNew")
const btnVerify = document.querySelector(".btnVerify")
const form = document.querySelector(".form")
const inputLetters = document.querySelector(".input-letters")
const inputNumbers = document.querySelector(".input-numbers")

let newLetter 
let newNumber

btnVerify.disabled = true

form.addEventListener('click', (e) => {
  e.preventDefault()
})

const generateRandom = () => {
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let slicedLetter = ''
  let slicedNumber = ''

  for (let i = 0; i < 3; i++) {
    let rndLetter = Math.floor(Math.random()*26)
    slicedLetter += pool[rndLetter]

    let rndNumber = Math.floor(Math.random()*10)
    slicedNumber += rndNumber
  }
  return [slicedLetter, slicedNumber]
}

btnGenerate.addEventListener('click', () => {

  [newLetter, newNumber] = generateRandom()

  // reset
  letters.style.color = 'black'
  numbers.style.color = 'black'
  inputLetters.value = ''
  inputNumbers.value = ''

  letters.innerHTML = newLetter
  numbers.innerHTML = newNumber

  inputLetters.focus()

  btnVerify.disabled = false
  
  let timer = setTimeout(() => {
    letters.innerHTML = ''
    numbers.innerHTML = ''
  }, 1000);
})

btnVerify.addEventListener('click', () => {
  const inputL = inputLetters.value.toUpperCase()
  const inputN = inputNumbers.value

  letters.innerHTML = newLetter
  numbers.innerHTML = newNumber

  inputL == newLetter 
    ? letters.style.color = 'green'
    : letters.style.color = 'red'

  inputN == newNumber 
    ? numbers.style.color = 'green'
    : numbers.style.color = 'red'

  btnGenerate.focus()
})

inputLetters.addEventListener('input', () => {
  let inputValueLetter = inputLetters.value.toUpperCase()
  letters.innerHTML = inputValueLetter

  if(inputValueLetter.length == 3){
    inputNumbers.focus()
  }
})

inputNumbers.addEventListener('input', () => {
  let inputValueLetter = inputNumbers.value

  numbers.innerHTML = inputValueLetter
  if(inputValueLetter.length == 3){
    btnVerify.focus()
  }
})





