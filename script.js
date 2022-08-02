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
