// 1. Creazione degli elementi
const container = document.getElementById('counterContainer');

const minusButton = document.createElement('button');
minusButton.textContent = '−';

const valueDisplay = document.createElement('div');
valueDisplay.className = 'value';

let count = 0;
valueDisplay.textContent = count;

const plusButton = document.createElement('button');
plusButton.textContent = '+';

// 2. Inserimento nel DOM
container.appendChild(minusButton);
container.appendChild(valueDisplay);
container.appendChild(plusButton);

// 3. Eventi dei pulsanti
minusButton.addEventListener('click', () => {
  count--;
  valueDisplay.textContent = count;
});

plusButton.addEventListener('click', () => {
  count++;
  valueDisplay.textContent = count;
}
);