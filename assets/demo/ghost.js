const ghostContainer = document.createElement('div');
ghostContainer.className = 'box__ghost';

const symbols = [];
for (let i = 0; i < 6; i++) {
    const symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbols.push(symbol);
    ghostContainer.appendChild(symbol);
}

const ghostBody = document.createElement('div');
ghostBody.className = 'box__ghost-container';

const ghostEyes = document.createElement('div');
ghostEyes.className = 'box__ghost-eyes';

const leftEye = document.createElement('div');
leftEye.className = 'box__eye-left';

const rightEye = document.createElement('div');
rightEye.className = 'box__eye-right';

ghostEyes.appendChild(leftEye);
ghostEyes.appendChild(rightEye);

const ghostBottom = document.createElement('div');
ghostBottom.className = 'box__ghost-bottom';

for (let i = 0; i < 5; i++) {
    const segment = document.createElement('div');
    ghostBottom.appendChild(segment);
}

ghostBody.appendChild(ghostEyes);
ghostBody.appendChild(ghostBottom);

const ghostShadow = document.createElement('div');
ghostShadow.className = 'box__ghost-shadow';

ghostContainer.appendChild(ghostBody);
ghostContainer.appendChild(ghostShadow);

document.getElementById('ghost').appendChild(ghostContainer);

document.addEventListener('mousemove', function(event) {
    const pageX = document.documentElement.scrollWidth;
    const pageY = document.documentElement.scrollHeight;
    const mouseX = event.pageX / -pageX;
    const mouseY = event.pageY;
    const yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
    const xAxis = -mouseX * 100 - 100;
    ghostEyes.style.transform = `translate(${xAxis}%, ${-yAxis}%)`;
});