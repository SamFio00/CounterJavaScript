// 1. Creazione degli elementi funzionali
const container = document.getElementById('counterContainer');

const minusButton = document.createElement('button');
minusButton.textContent = '−';

const valueDisplay = document.createElement('div');
valueDisplay.className = 'value';

let count = 0;
valueDisplay.textContent = count;

const plusButton = document.createElement('button');
plusButton.textContent = '+';

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';

// Elementi audio

const incrementSound = new Audio('assets/audio/plusClick.wav');
const decrementSound = new Audio('assets/audio/minusClick.wav');
const resetSound = new Audio('assets/audio/resetClick.wav');
const goalSound = new Audio('assets/audio/goal.wav'); // Suono per il raggiungimento dell'obiettivo

const bgMusic = new Audio('assets/audio/bgmusic.mp3');
bgMusic.loop = true; // Imposta la musica in loop
bgMusic.volume = 0.2; // Imposta il volume della musica di sottofondo

const toggleMusicBtn = document.createElement('button'); // Pulsante per attivare/disattivare la musica
toggleMusicBtn.className = 'toggle-music';
toggleMusicBtn.textContent = '🎶';
document.body.appendChild(toggleMusicBtn);

const ulElement = document.querySelector('ul'); // Seleziona l'elemento <ul> esistente

container.parentNode.insertBefore(toggleMusicBtn, ulElement); // Inserisce il pulsante prima dell'elemento <ul>

toggleMusicBtn.addEventListener('click', () => { // Funzione per attivare/disattivare la musica
  if (bgMusic.paused) {
    bgMusic.play();
    toggleMusicBtn.textContent = '🔊';
  } else {
    bgMusic.pause();
    toggleMusicBtn.textContent = '🔇';
  }
});


// Funzione per riprodurre audio
function playSound(sound) {
  sound.currentTime = 0; // Riavvolgi il suono all'inizio
  sound.play();
}

// Funzione per il traguardo del 10

function checkGoal() {
  if (count % 10 === 0 && count !== 0) {  // Esclude lo 0
    playSound(goalSound);  // Riproduci il suono del traguardo
  }
}




// 2. Inserimento nel DOM
container.appendChild(minusButton);
container.appendChild(valueDisplay);
container.appendChild(plusButton);
container.appendChild(resetButton);

// 3. Eventi dei pulsanti
minusButton.addEventListener('click', () => {
  count--;
  valueDisplay.textContent = count;
  playSound(decrementSound); // Riproduci suono decremento
  checkGoal();
});

plusButton.addEventListener('click', () => {
  count++;
  valueDisplay.textContent = count;
  playSound(incrementSound); // Riproduci suono incremento
  checkGoal();
}
);

resetButton.addEventListener('click', () => {
  count = 0;
  valueDisplay.textContent = count;
  playSound(resetSound); // Riproduci suono reset
});