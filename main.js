const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'gun'],
  attack: function() {
    console.log(player.name + ' '  + "Fight...");
  },
}

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['knife', 'gun'],
  attack: function() {
    console.log(player.name + ' '  + "Fight...");
  },
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }


  return $tag;
}

const createPlayer = (playerObj) => {
  const $life = createElement('div', 'life');
  $life.innerText = playerObj.hp;
  $life.style.width = '100%';

  const $name = createElement('div', 'name');
  $name.innerText = playerObj.name;

  const $progressbar = createElement('div', 'progressbar');
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $img = createElement('img');
  $img.src = playerObj.img;

  const $character = createElement('div', 'character');
  $character.appendChild($img);

  const $player = createElement('div', 'player'+playerObj.player);
  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

function changeHP(player, randomShoot) {
  const $playerLife = document.querySelector('.player'+ player.player +' .life');

  if (player.hp >= 0) {
    player.hp -= randomShoot;
  } else {
    player.hp = 0;
  }
  $playerLife.style.width = player.hp + '%';

  if (player.hp < 0) {
    $randomButton.disabled = true;
  }

  if (player1.hp < 0) {
    $arenas.appendChild(playerLose(player2.name));
  } else if (player2.hp < 0) {
    $arenas.appendChild(playerLose(player1.name));
  }
}



function getRandomInt(min, max) {
  randomInt = Math.floor(Math.random() * (max - min)) + min;
  return randomInt;
}



function playerLose(name){
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' wins';

  return $loseTitle;
}

$randomButton.addEventListener('click', function() {
  console.log('####: Click Random Button');

  changeHP(player1, getRandomInt(1, 20));
  changeHP(player2, getRandomInt(1, 20));
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
