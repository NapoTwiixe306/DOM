const title = document.title;
console.log(title);

document.title = 'Modification du DOM';

const bodyContent = document.body.children;
Array.from(bodyContent).forEach(item => console.log(item));

const firstColor = Math.floor(Math.random() * 256);
const secondColor = Math.floor(Math.random() * 256);
const lastColor = Math.floor(Math.random() * 256);
document.body.style.backgroundColor = `rgb(${firstColor},${secondColor},${lastColor})`;
