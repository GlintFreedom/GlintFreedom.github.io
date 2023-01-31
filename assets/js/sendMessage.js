// import './email.min.js'
// import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js'
import apiKeys from './apikeys.js'

const sendButton = document.getElementById('send-button')
const sendMessage = document.getElementById('message').value
const sendName = document.getElementById('name').value
const sendEmail = document.getElementById('email').value

const sendMove = e => {
  e.preventDefault()

  var formData = new FormData(this);
  formData.append('service_id', apiKeys.SERVICE_ID);
  formData.append('template_id', apiKeys.TEMPLATE_ID);
  formData.append('user_id', apiKeys.USER_ID);
  
  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function() {
    alert('Your mail is sent!');
  }).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });
}
sendButton.addEventListener('submit', sendMove)