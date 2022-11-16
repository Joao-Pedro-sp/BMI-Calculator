import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'
// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')



// funcao para um evento
form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if(showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC e de ${result}`

  Modal.message.innerText = message
  //modalWrapper.classList.add('open')
  Modal.open()
}

form.oninput = () => AlertError.close()



