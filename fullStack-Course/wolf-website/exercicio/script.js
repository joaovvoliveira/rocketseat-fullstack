const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fields = [
    {
      id: 'name',
      label: 'Nome',
      validator: isNameValid,
    },
    {
      id: 'last_name',
      label: 'Last Name',
      validator: isNameValid,
    },
    {
      id: 'birth',
      label: 'birth',
      validator: isDateValid
    },
    {
      id: 'email',
      label: 'email',
      validator: isEmailValid
    },
    {
      id: 'password',
      label: 'password',
      validator: isPasswordSecure
    },
    {
      id: 'confirm_password',
      label: 'confirm_password',
      validator: doesPasswordMatch
    }
  ];
  
  const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>';
  
  fields.forEach(function (field) {
    const input = document.getElementById(field.id);
    const inputBox = input.closest('.input-box');
    const inputValue = input.value;

    const errorSpan = inputBox.querySelector('.error')
    errorSpan.innerHTML = '';
 dd
    inputBox.classList.remove('invalid');
    inputBox.classList.add('valid');

    const fieldValidator = field.validator(inputValue);

    if (!fieldValidator.isValid){
      errorSpan.innerHTML = `${errorIcon} ${fieldValidator.errorMessage}`;
      inputBox.classList.add('invalid');
      inputBox.classList.remove('valid');
      return;
    };
  }); 

  const genders = document.getElementByName('gender');
  const radioContainer = document.querySelector('.radio-container');
  const genderErrorSpan = radioContainer.querySelector('.error');

  const selectedGender = [...genders].find(input => input.checked);
  radioContainer.classList.add('invalid');
  radioContainer.classList.remove('valid');
  genderErrorSpan.innerHTML = `${errorIcon} Selecione um genero`;

  if (selectedGender){
    radioContainer.classList.add('valid');
    radioContainer.classList.remove('invalid');
    genderErrorSpan.innerHTML = '';
    return;
  }

});

function isEmpty(value) {
  return value === '';
}

function isNameValid(value) {

  const validator = {
    isValid: true,
    errorMessage: null
  }

  if (isEmpty(value)){
    validator.isValid = false;
    validator.errorMessage = 'O campo é obrigatório';
    return validator;
  }

  const min = 3;

  if (value.length < min) {
    validator.isValid = false;
    validator.errorMessage = `O campo deve ter no min ${min} letras`
    return validator;
  }

  const regex = /^[a-zA-Z]/;

  if(!regex.test(value)){
    validator.isValid = false;
    validator.errorMessage = 'O campo deve conter apenas letras.'
  }

  return validator;
};

function isDateValid(value){
  const validator = {
    isValid: true,
    errorMessage: null
  }

  if (isEmpty(value)){
    validator.isValid = false;
    validator.errorMessage = 'O Nascimento é obrigatório';
    return validator;
  }

  const year = new Date(value).getFullYear();

  if (year < 1920 || year > new Date().getFullYear()) {
    validator.isValid = false;
    validator.errorMessage = 'Data Inválida';
    return validator;
  }

  return validator;
}

function isEmailValid(value) {
  const validator = {
    isValid: true,
    errorMessage: null
  }

  if (isEmpty(value)){
    validator.isValid = false;
    validator.errorMessage = 'O email é obrigatório';
    return validator;
  }

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    if(!regex.test(value)){
    validator.isValid = false;
    validator.errorMessage = 'O email precisa ser válido!';
    return validator;
  }

  return validator;
}

function isPasswordSecure(value) {
  const validator = {
    isValid: true,
    errorMessage: null
  }

  if (isEmpty(value)){
    validator.isValid = false;
    validator.errorMessage = 'A Senha é obrigatória';
    return validator;
  }

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|\\:;"'<>,./~`]).{8,}$/;

  if(!regex.test(value)){
    validator.isValid = false;
    validator.errorMessage = 'A senha nao bate com os critérios.'
    return validator;
  }
  return validator;
}

function doesPasswordMatch(value) {
  const validator = {
    isValid: true,
    errorMessage: null
  }
  
  const passwordValue = document.getElementById('password').value;

  if( value === '' || passwordValue !== value) {
    validator.isValid = false;
    validator.errorMessage = 'A senha não bate com a anterior';
    return validator;
  }

  return validator;
}

function genderValidation(value) {

}



const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    const input = this.parentElement.querySelector('.form-control');
    console.log(input);
    input.type = input.type === 'password' ? 'text' : 'password';
    this.classList.toggle('fa-eye');
  });
})