const switchLabel = document.createElement('label');
switchLabel.className = 'xixi__switch';

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
emojiFaceSad.className = 'xixi__switch__emoji__face xixi__switch__emoji__face--sad';
const emojiEyeSad1 = document.createElement('span');
emojiEyeSad1.className = 'xixi__switch__emoji__eye';
const emojiEyeSad2 = document.createElement('span');
emojiEyeSad2.className = 'xixi__switch__emoji__eye';
const emojiMouthSad = document.createElement('span');
emojiMouthSad.className = 'xixi__switch__emoji__mouth';
emojiFaceSad.appendChild(emojiEyeSad1);
emojiFaceSad.appendChild(emojiEyeSad2);
emojiFaceSad.appendChild(emojiMouthSad);

const emojiFaceHappy = document.createElement('span');
emojiFaceHappy.className = 'xixi__switch__emoji__face';
const emojiEyeHappy1 = document.createElement('span');
emojiEyeHappy1.className = 'xixi__switch__emoji__eye';
const emojiEyeHappy2 = document.createElement('span');
emojiEyeHappy2.className = 'xixi__switch__emoji__eye';
const emojiMouthHappy = document.createElement('span');
emojiMouthHappy.className = 'xixi__switch__emoji__mouth';
emojiFaceHappy.appendChild(emojiEyeHappy1);
emojiFaceHappy.appendChild(emojiEyeHappy2);
emojiFaceHappy.appendChild(emojiMouthHappy);

switchEmoji.appendChild(emojiFaceSad);
switchEmoji.appendChild(emojiFaceHappy);

switchWrapper.appendChild(switchInput);
switchWrapper.appendChild(switchEmoji);
switchLabel.appendChild(switchWrapper);

const switchLabelText = document.createElement('span');
switchLabelText.className = 'xixi__switch__label';
switchLabelText.textContent = 'Power';
switchLabel.appendChild(switchLabelText);

document.getElementById('switch1').appendChild(switchLabel);

switchInput.addEventListener('change', function () {
  switchEmoji.classList.toggle('xixi__switch__emoji--active', switchInput.checked);
});
