const _initTime = Date.now();

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

function clickOnSquare(e) {
  const time = getElapsedTime();
  const div = document.createElement("div");
  div.className = 'displayedsquare';
  div.style.background = e.target.classList[1];

  div.onclick = function () {
    alert(e.target.classList[1]);
  }
  document.querySelector('.displayedsquare-wrapper').appendChild(div);
  const ul = document.querySelector('h2+ul');
  const li = document.createElement('li');
  li.innerHTML = "[" + time + "] Created a " + e.target.classList[1] + " new square";
  ul.appendChild(li);
}

function getRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    const firstColor = Math.ceil(Math.random() * 255);
    const secondColor = Math.ceil(Math.random() * 255);
    const lastColor = Math.ceil(Math.random() * 255);
    document.querySelector('body').style.backgroundColor = 'rgb(' + firstColor + ',' + secondColor + ',' + lastColor + ')';
  }
  if (event.code === 'KeyS') {
    const list = document.querySelectorAll('h2+ul>li');
    for (let item of list) {
      item.remove();
    }
    const squares = document.querySelectorAll('.displayedsquare');
    for (let item of squares) {
      item.remove();
    }
  }
});
