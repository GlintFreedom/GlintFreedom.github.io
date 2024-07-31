// Create the main container
const mainContainer = document.createElement('main');
mainContainer.className = 'loader-container';

// Create the loader state container
const loaderState = document.createElement('div');
loaderState.className = 'loader-state';

// Create the SVG
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.classList.add('nyan');
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
svg.setAttribute('viewBox', '0 0 47 20');

// Create the linear gradient
const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
const linearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
linearGradient.id = 'rainbow-colors';
linearGradient.setAttribute('x1', '0.5');
linearGradient.setAttribute('x2', '0.5');
linearGradient.setAttribute('y2', '1');

const stops = [
  { offset: '0', class: 'rainbow-color1' },
  { offset: '0.167', class: 'rainbow-color1' },
  { offset: '0.167', class: 'rainbow-color2' },
  { offset: '0.335', class: 'rainbow-color2' },
  { offset: '0.335', class: 'rainbow-color3' },
  { offset: '0.5', class: 'rainbow-color3' },
  { offset: '0.5', class: 'rainbow-color4' },
  { offset: '0.669', class: 'rainbow-color4' },
  { offset: '0.669', class: 'rainbow-color5' },
  { offset: '0.833', class: 'rainbow-color5' },
  { offset: '0.833', class: 'rainbow-color6' },
  { offset: '1', class: 'rainbow-color6' }
];

stops.forEach(stop => {
  const stopElement = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stopElement.classList.add(stop.class);
  stopElement.setAttribute('offset', stop.offset);
  linearGradient.appendChild(stopElement);
});

defs.appendChild(linearGradient);
svg.appendChild(defs);

// Create the rainbow group
const rainbowGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
rainbowGroup.classList.add('rainbow');
for (let i = 0; i < 6; i++) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rainbowGroup.appendChild(rect);
}
svg.appendChild(rainbowGroup);

// Create the pig group
const pigGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
pigGroup.classList.add('pig');

// Create the foot group
const footGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
footGroup.classList.add('foot');
footGroup.setAttribute('transform', 'translate(52)');

const footRects = [
  { width: 1, height: 3, transform: 'translate(6 13)' },
  { width: 1, height: 3, transform: 'translate(8 13)' },
  { width: 1, height: 3, transform: 'translate(14 13)' },
  { width: 1, height: 3, transform: 'translate(12 13)' }
];

footRects.forEach(foot => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('width', foot.width);
  rect.setAttribute('height', foot.height);
  rect.setAttribute('transform', foot.transform);
  footGroup.appendChild(rect);
});

pigGroup.appendChild(footGroup);

// Create the tail group
const tailGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
tailGroup.classList.add('tail');

const tailRects = [
  { width: 1, height: 1, transform: 'translate(4 10)' },
  { width: 1, height: 1, transform: 'translate(3 11)' }
];

tailRects.forEach(tail => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('width', tail.width);
  rect.setAttribute('height', tail.height);
  rect.setAttribute('transform', tail.transform);
  tailGroup.appendChild(rect);
});

pigGroup.appendChild(tailGroup);

// Create the body group
const bodyGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
bodyGroup.setAttribute('transform', 'translate(52)');

const bodyRects = [
  { class: 'body1', width: 8, height: 8, transform: 'translate(7 6)' },
  { class: 'body1', width: 10, height: 8, transform: 'translate(6 7)' },
  { class: 'body1', width: 12, height: 6, transform: 'translate(5 8)' },
  { class: 'body2', width: 10, height: 6, transform: 'translate(6 8)' },
  { class: 'body2', width: 8, height: 6, transform: 'translate(7 7)' },
  { class: 'stains', width: 4, height: 1, transform: 'translate(7 13)' },
  { class: 'stains', width: 2, height: 1, transform: 'translate(8 12)' },
  { class: 'stains', width: 2, height: 1, transform: 'translate(6 9)' },
  { class: 'stains', width: 3, height: 1, transform: 'translate(6 8)' },
  { class: 'stains', width: 3, height: 1, transform: 'translate(7 7)' },
  { class: 'stains', width: 1, height: 1, transform: 'translate(14 7)' }
];

bodyRects.forEach(body => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('class', body.class);
  rect.setAttribute('width', body.width);
  rect.setAttribute('height', body.height);
  rect.setAttribute('transform', body.transform);
  bodyGroup.appendChild(rect);
});

pigGroup.appendChild(bodyGroup);

// Create the ears group
const earsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
earsGroup.classList.add('ears');
earsGroup.setAttribute('transform', 'translate(52)');

const earsRects = [
  { width: 1, height: 3, transform: 'translate(10 5)' },
  { width: 1, height: 3, transform: 'translate(15 5)' }
];

earsRects.forEach(ear => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('width', ear.width);
  rect.setAttribute('height', ear.height);
  rect.setAttribute('transform', ear.transform);
  earsGroup.appendChild(rect);
});

pigGroup.appendChild(earsGroup);

// Create the snout group
const snoutGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
snoutGroup.classList.add('snout');

const snoutRects = [
  { class: 'snout1', width: 5, height: 3, transform: 'translate(13 10)' },
  { class: 'snout-holes', width: 1, height: 3, transform: 'translate(17 11) rotate(90)' },
  { class: 'snout2', width: 1, height: 1, transform: 'translate(16 11) rotate(90)' }
];

snoutRects.forEach(snout => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('class', snout.class);
  rect.setAttribute('width', snout.width);
  rect.setAttribute('height', snout.height);
  rect.setAttribute('transform', snout.transform);
  snoutGroup.appendChild(rect);
});

pigGroup.appendChild(snoutGroup);

// Create the eyes group
const eyesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
eyesGroup.classList.add('eyes');

const eyesRects = [
  { width: 1, height: 1, transform: 'translate(12 9)' },
  { width: 1, height: 1, transform: 'translate(15 9)' }
];

eyesRects.forEach(eye => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('width', eye.width);
  rect.setAttribute('height', eye.height);
  rect.setAttribute('transform', eye.transform);
  eyesGroup.appendChild(rect);
});

pigGroup.appendChild(eyesGroup);

// Append the pig group to the SVG
svg.appendChild(pigGroup);

// Append the SVG to the loader state container
loaderState.appendChild(svg);

// Append the loader state container to the main container
mainContainer.appendChild(loaderState);

// Create the loader text
const loaderText = document.createElement('span');
loaderText.className = 'loader-text';
loaderText.textContent = 'Loading...';

// Append the loader text to the main container
mainContainer.appendChild(loaderText);

// Create the background container
const backgroundContainer = document.createElement('div');
backgroundContainer.className = 'background-container';

// Create the stars div
const starsDiv = document.createElement('div');
starsDiv.className = 'stars';

// Append the stars div to the background container
backgroundContainer.appendChild(starsDiv);

// Append the background container to the main container
mainContainer.appendChild(backgroundContainer);

// Append the main container to the body
document.body.appendChild(mainContainer);
