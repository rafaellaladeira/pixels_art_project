// const colorPalette = document.querySelector('section');
const color1 = document.querySelector('.um');
const color2 = document.querySelector('.dois');
const color3 = document.querySelector('.tres');
const color4 = document.querySelector('.quatro');

// Referência para a questão 4: https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript :

const bigPixel = document.getElementById('pixel-board');

function createBigPixel(rows, cols) {
  bigPixel.style.setProperty('--grid-rows', rows);
  bigPixel.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i += 1) {
    const pixel = document.createElement('div');
    bigPixel.appendChild(pixel).className = 'pixel white';
  }
}
createBigPixel(5, 5);

// Requisito 6, 7, 8:
window.onload = color1.classList.add('selected');

function pickColor(event) {
  if (document.querySelectorAll('.selected').length === 0) {
    event.target.classList.add('selected');
  } else if (document.querySelectorAll('.selected').length > 0) {
    const current = document.querySelector('.selected');
    current.classList.remove('selected');
    event.target.classList.add('selected');
  }
}
color1.addEventListener('click', pickColor);
color2.addEventListener('click', pickColor);
color3.addEventListener('click', pickColor);
color4.addEventListener('click', pickColor);

// Colocando a cor no pixel:

function putSomeColor() {
  if (color1.classList.contains('selected')) {
    event.target.classList.toggle('um') && event.target.classList.remove('white');
  } else if (color2.classList.contains('selected')) {
    event.target.classList.toggle('dois') && event.target.classList.remove('white');
  } else if (color3.classList.contains('selected')) {
    event.target.classList.toggle('tres') && event.target.classList.remove('white');
  } else if (color4.classList.contains('selected')) {
    event.target.classList.toggle('quatro') && event.target.classList.remove('white');
  }
}

for (let i = 0; i <= 24; i += 1) {
  const allPixel = document.querySelectorAll('.pixel')[i];
  allPixel.addEventListener('click', putSomeColor);

  const clearButton = document.querySelector('#clear-board');
  // Requisito 9:
  function clearAll() {
    allPixel.classList.add('white');
  }
  clearButton.addEventListener('click', clearAll);
}
