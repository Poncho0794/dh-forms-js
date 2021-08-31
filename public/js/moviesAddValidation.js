

const errors = {}

window.addEventListener('load', () => {

  const titleInput = document.querySelector('input#title')
  titleInput.focus()

  const form = document.forms['form']
  form.addEventListener('change', (e) => {
    const submitButton = document.querySelector('button.botonAgregar');
    const numericalFields = ['rating','awards', 'length']
    if(numericalFields.includes(e.target.id)) {
      const errorMessage = evalNumericalFields(e)
      if (errorMessage) errors[e.target.id] = errorMessage
      else delete errors[e.target.id]
    }
    submitButton.disabled = Object.keys(errors).length > 0
    console.log(errors)
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })

})

const evalNumericalFields = (e) => {
  let value = Number(e.target.value)
  const errorMessageElement = document.querySelector(`span#${e.target.id}Error`)
  let errorMessage;
  if(isNegativeValue(value)) {
    console.log(`${e.target.id}#error`)
    errorMessage = 'El numero no puede ser negativo'
    errorMessageElement.innerText = errorMessage
    errorMessageElement.style.display = 'block'
  } else {
    errorMessageElement.style.display = 'none'
  }
  return errorMessage;
}

const isNegativeValue = (num) => num < 0
const lengthValidator = (element) => element.value === 0