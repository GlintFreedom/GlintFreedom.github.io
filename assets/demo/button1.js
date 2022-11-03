const newButton = document.createElement('button')
newButton.innerHTML = 'newButton-unclicked'
newButton.id = 'newButton'
newButton.className = 'newButton-unclicked'
newButton.addEventListener('click', function() {
  if(newButton.innerHTML == 'newButton-unclicked'){
    newButton.innerHTML = 'newButton-clicked'
    newButton.className = 'newButton-clicked'
  }
  else{
    newButton.innerHTML = 'newButton-unclicked'
    newButton.className = 'newButton-unclicked'
  }
})
document.getElementById('button1').appendChild(newButton)