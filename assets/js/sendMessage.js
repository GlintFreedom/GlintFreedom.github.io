import 'email.min.js'
import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js'
import apiKeys from 'apikeys.js'

const sendButton = document.getElementById('send-button')
const sendMessage = document.getElementById('message').value
const sendName = document.getElementById('name').value
const sendEmail = document.getElementById('email').value

const sendMove = e => {
  e.preventDefault()

  emailjs
    .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then(
      result => {
        console.log(result.text)
        alert('发送成功')
      },
      error => {
        console.log(error.text)
        alert('发送失败')
      }
    )
}
sendButton.addEventListener('submit', sendMove)