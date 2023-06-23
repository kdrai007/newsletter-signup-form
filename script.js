const inputEmail = document.querySelector('#email-ad');
const dismissBtn = document.querySelector('#dis-btn');
const subscribeBtn = document.querySelector('#sub-btn');
const formDiv = document.querySelector('#form-div');
const thanksDiv = document.querySelector('#thanks-div');
const emailError = document.querySelector('.email-error');

let emailValue = '';

subscribeBtn.addEventListener('click', () => {
  const emailValue = inputEmail.value;
  const validEmail = ValidateEmail(emailValue);
  if (!validEmail) {
    inputEmail.classList.add('email-check');
    emailError.classList.remove('keep-hidden');
    return;
  }
  inputEmail.classList.remove('email-check');
  emailError.classList.add('keep-hidden');
  formDiv.classList.add('keep-hidden');
  thanksDiv.classList.remove('keep-hidden');
  document.querySelector('.user-email').textContent = emailValue;
  inputEmail.value = '';
});

dismissBtn.addEventListener('click', () => {
  thanksDiv.classList.add('keep-hidden');
  formDiv.classList.remove('keep-hidden');
});

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
