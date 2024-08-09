const switchContainer = document.createElement('label');
switchContainer.className = 'xixi__switch';

const switchWrapper = document.createElement('span');
switchWrapper.className = 'xixi__switch__wrapper';

const switchInput = document.createElement('input');
switchInput.type = 'checkbox';
switchInput.className = 'xixi__switch__input';
switchInput.role = 'switch';
switchInput.checked = true; // 默认选中

const switchEmoji = document.createElement('span');
switchEmoji.className = 'xixi__switch__emoji';

const emojiFaceSad = document.createElement('span');
emojiFaceSad.className = 'xixi__switch__emoji-face xixi__switch__emoji-face--sad';
const emojiEyeSad1 = document.createElement('span');
emojiEyeSad1.className = 'xixi__switch__emoji-eye';
const emojiEyeSad2 = document.createElement('span');
emojiEyeSad2.className = 'xixi__switch__emoji-eye';
const emojiMouthSad = document.createElement('span');
emojiMouthSad.className = 'xixi__switch__emoji-mouth';
emojiFaceSad.appendChild(emojiEyeSad1);
emojiFaceSad.appendChild(emojiEyeSad2);
emojiFaceSad.appendChild(emojiMouthSad);

const emojiFaceHappy = document.createElement('span');
emojiFaceHappy.className = 'xixi__switch__emoji-face xixi__switch__emoji-face--happy';
const emojiEyeHappy1 = document.createElement('span');
emojiEyeHappy1.className = 'xixi__switch__emoji-eye';
const emojiEyeHappy2 = document.createElement('span');
emojiEyeHappy2.className = 'xixi__switch__emoji-eye';
const emojiMouthHappy = document.createElement('span');
emojiMouthHappy.className = 'xixi__switch__emoji-mouth';
emojiFaceHappy.appendChild(emojiEyeHappy1);
emojiFaceHappy.appendChild(emojiEyeHappy2);
emojiFaceHappy.appendChild(emojiMouthHappy);

switchEmoji.appendChild(emojiFaceSad);
switchEmoji.appendChild(emojiFaceHappy);

switchWrapper.appendChild(switchInput);
switchWrapper.appendChild(switchEmoji);
switchContainer.appendChild(switchWrapper);

document.getElementById('switch1').appendChild(switchContainer);

// switchInput.addEventListener('change', function () {
//   console.log('Switch changed');
//   // switchWrapper.style.backgroundColor = '#0ac213';
// });
