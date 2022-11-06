import emailjs from 'email.min.js'

const sendButton = document.getElementById('send-button')
const sendMessage = document.getElementById('message').value
const sendName = document.getElementById('name').value
const sendEmail = document.getElementById('email').value
sendButton.addEventListener('click', function() {
  if(sendName && sendEmail && sendMessage){
    emailjs.init('rnVbmcYqjSuK_oPfH')
    var message = {
      name: sendName,
      email: sendEmail,
      message: sendMessage,
    }
    emailjs.send('service_1','rnVbmcYqjSuK_oPfH', message).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
      console.log('FAILED...', err);
    })
  }
})