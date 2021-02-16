const button = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const colors = [
  '#6A81CD',
  '#205260',
  '#7CC757',
  '#364BA1',
  '#3DB8B1',
  '#BEC3E9'
];

button.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
  h1.innerHTML = `HEX COLOR:  ${randomColor}`;
});
