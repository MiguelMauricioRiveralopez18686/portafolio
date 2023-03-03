// Validate contact form
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  let isValid = true;
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
  }
  if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
    isValid = false;
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }
  if (messageInput.value.trim() === '') {
    isValid = false;
    messageInput.classList.add('invalid');
  } else {
    messageInput.classList.remove('invalid');
  }
  if (isValid) {
    contactForm.reset();
    alert('Thank you for your message!');
  }
});