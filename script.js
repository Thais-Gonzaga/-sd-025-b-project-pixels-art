const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
document.body.appendChild(h1);

const main = document.createElement('main');
document.body.appendChild(main);

const div = document.createElement('div');
div.id = 'color-palette';
main.appendChild(div);

const divButtonInput = document.createElement('div');
divButtonInput.id = 'div-button';
main.appendChild(divButtonInput);

const colors = ['black', 'blue', 'green', 'red'];
for (let index = 0; index <= colors.length - 1; index += 1) {
  const newDiv = document.createElement('div');
  newDiv.className = 'color';
  newDiv.style.background = colors[index];
  div.appendChild(newDiv);
}

function createLine(number, widthPixel) {
  const line = document.createElement('div');
  line.className = 'line';
  line.style.width = `${widthPixel * number + number * 4}px`;
  line.style.height = `${widthPixel + 2}px`;
  return line;
}

function createPixel(widthPixel, line) {
  const elementPixel = document.createElement('div');
  elementPixel.className = 'pixel';
  elementPixel.style.width = `${widthPixel}px`;
  elementPixel.style.height = `${widthPixel}px`;
  line.appendChild(elementPixel);
}

function creatBord(n) {
  const number = n > 50 ? 50 : n;
  const widthPixel = 40;
  const painting = document.createElement('div');
  painting.id = 'pixel-board';
  painting.style.backgroundColor = 'white';
  painting.style.width = `${widthPixel * number + number * 2}px`;
  main.appendChild(painting);
  for (let index = 0; index < number; index += 1) {
    createLine(number, widthPixel);
    const line = createLine(number, widthPixel);
    for (let i = 0; i < number; i += 1) {
      createPixel(widthPixel, line);
    }
    painting.appendChild(line);
  }
  return painting;
}

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
  const click = evento.target;
  click.style.backgroundColor = colorSelected;
}
const divPixelBoard = creatBord(5);
divPixelBoard.addEventListener('click', paint);

function createButton(text, id) {
  const button = document.createElement('button');
  button.innerHTML = text;
  button.id = id;
  divButtonInput.appendChild(button);
  return button;
}

function clearButton() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
const elementButton = createButton('Limpar', 'clear-board');
elementButton.addEventListener('click', clearButton);

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = 1;
input.max = 50;
divButtonInput.appendChild(input);

function button2VQV() {
  if (!input.value) return alert('Board inválido!');
  const divPixel = document.getElementById('pixel-board');
  divPixel.remove();
  if (input.value < 5) return creatBord(5);
  const divNew = creatBord(Number(input.value));
  divNew.addEventListener('click', paint);
}
const button2 = createButton('VQV', 'generate-board');
button2.addEventListener('click', button2VQV);

function colorDraw() {
  const draw1 = Math.round((Math.random() * 16)).toString(16);
  const draw2 = Math.round((Math.random() * 16)).toString(16);
  const draw3 = Math.round((Math.random() * 16)).toString(16);
  return `#${draw1}${draw2}${draw3}`;
}

function colorChange() {
  const classColor = document.querySelectorAll('.color');
  for (let index = 1; index < classColor.length; index += 1) {
    classColor[index].style.background = colorDraw();
    console.log(index, classColor[index]);
  }
}
window.onload = function load() {
  const blackColor = document.querySelector('.color');
  blackColor.classList.add('selected');
  colorChange();
};
