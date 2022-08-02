const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
document.body.appendChild(h1);

const main = document.createElement('main');
document.body.appendChild(main);

const div = document.createElement('div');
div.id = 'color-palette';
main.appendChild(div);

const colors = ['black', 'blue', 'green', 'red'];
for (let index = 0; index <= colors.length - 1; index += 1) {
  const newDiv = document.createElement('div');
  newDiv.className = 'color';
  newDiv.style.background = colors[index];
  div.appendChild(newDiv);
}

const n = 5;
const widthPixel = 40;
const painting = document.createElement('div');
painting.id = 'pixel-board';
painting.style.backgroundColor = 'white';
painting.style.width = `${widthPixel * n + n * 2}px`;
main.appendChild(painting);

for (let index = 0; index < n; index += 1) {
  const line = document.createElement('div');
  line.className = 'line';
  line.style.width = `${widthPixel * n + n * 4}px`;
  line.style.height = `${widthPixel + 2}px`;
  for (let i = 0; i < n; i += 1) {
    const elementPixel = document.createElement('div');
    elementPixel.className = 'pixel';
    elementPixel.style.width = `${widthPixel}px`;
    elementPixel.style.height = `${widthPixel}px`;
    line.appendChild(elementPixel);
  }
  painting.appendChild(line);
}

window.onload = function paintingWhith() {
  const classPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < classPixel.length; index += 1) {
    classPixel[index].style.background = 'white';
    console.log(classPixel[index]);
  }
};

window.onload = function selectedBlack() {
  const blackColor = document.querySelector('.color');
  blackColor.classList.add('selected');
};

function addClassSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
const [divColorPalette] = document.querySelectorAll('#color-palette');
divColorPalette.addEventListener('click', addClassSelected);

function paint(evento) {
  const selected = document.querySelector('.selected');
  const colorSelected = selected.style.background;
  evento.target.style.backgroundColor = colorSelected;
}
const divPixelBoard = document.querySelector('#pixel-board');
divPixelBoard.addEventListener('click', paint);
