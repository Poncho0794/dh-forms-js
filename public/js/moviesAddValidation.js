

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
    if(e.target.id === 'rating'){
      const errorTag = document.querySelector('#ratingError');
      if(!correctRating(Number(e.target.value))){
        console.log(!correctRating(Number(e.target.value)));
        errorTag.style.display = "block";
        errorTag.innerText = 'El rating tiene que ser menor a 10.';
    }
    }
    submitButton.disabled = Object.keys(errors).length > 0
    console.log(errors)
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  // const rating = document.querySelector('#rating');
  // rating.addEventListener('change', (e) => {
  //   const errorTag = document.querySelector('#ratingError');
  //   if(!correctRating(Number(e.target.value))){
  //     console.log(!correctRating(Number(e.target.value)));
  //     errorTag.style.display = "block";
  //     errorTag.innerText += 'El rating tiene que ser menor a 10.';
  //   }
  // })

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
const correctRating = (num) => num <= 10
const correctLength = (num) => num <= 240 && num >= 60
const lengthValidator = (element) => element.value === 0

// campos de titulo, calificacion, premios, fecha de creación y genero.
//1ro : calificación no sea mayor a 10, puede ser 0.
//2do : duracion sea mayor a 60 min a 240 min.