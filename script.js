const colorPalette = document.querySelector('section');
const color1 = document.createElement('div');
const color2 = document.createElement('div');
const color3 = document.createElement('div');
const color4 = document.createElement('div');
color1.className = 'color um';
color2.className = 'color dois';
color3.className = 'color tres';
color4.className = 'color quatro';
colorPalette.appendChild(color1);
colorPalette.appendChild(color2);
colorPalette.appendChild(color3);
colorPalette.appendChild(color4);

const bigPixel = document.getElementById('pixel-board');

function makeRows(rows, cols) {
  bigPixel.style.setProperty('--grid-rows', rows);
  bigPixel.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i += 1) {
    const pixel = document.createElement('div');
    bigPixel.appendChild(pixel).className = 'pixel';
  }
}
makeRows(5, 5);

// Referência para a questão 4: https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

