const $arenas = document.querySelector('.arenas');
const $buttonFight = document.querySelector('.button');

const $formFight = document.querySelector('.control');


const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
  player: 1,
  name: 'scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'gun'],
  attack,
  changeHP,
  renderHp,
  elHP,
}

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['knife', 'gun'],
  attack,
  changeHP,
  renderHp,
  elHP,
}

function attack() {
  console.log(player.name + ' '  + "Fight...");
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

function changeHP(randomInt) {
  this.hp -= randomInt;
  if (this.hp < 0) {
    this.hp = 0;
  }
}

function elHP() {
  const $playerLife = document.querySelector('.player'+ this.player +' .life');
  return $playerLife;
}



function renderHp() {
  this.elHP().style.width = this.hp + '%';
  this.elHP().innerText = this.hp;
}


function getRandomInt(min, max) {
  randomInt = Math.floor(Math.random() * (max - min)) + min;
  return randomInt;
}

function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  $arenas.appendChild($reloadWrap);

  const $createReloadButton = createElement('button', 'button');
  $createReloadButton.innerText = 'Restart';
  $reloadWrap.appendChild($createReloadButton);

  $createReloadButton.addEventListener('click', function() {
    window.location.reload();
  })
}



function playerWins(name){
  const $loseTitle = createElement('div', 'loseTitle');
  if (player1.hp != player2.hp) {
    $loseTitle.innerText = name + ' wins';
  } else if (player1.hp === 0 && player2.hp === 0) {
    $loseTitle.innerText = 'Draw';
  }

  return $loseTitle;
}

// $randomButton.addEventListener('click', function() {
//   player1.changeHP(getRandomInt(1, 20));
//   player2.changeHP(getRandomInt(1, 20));
//   player1.renderHp();
//   player2.renderHp();
//
//
//   if (player1.hp === 0 || player2.hp === 0) {
//     $randomButton.disabled = true;
//     createReloadButton();
//   }
//
//   if (player1.hp === 0 && player1.hp < player2.hp) {
//     $arenas.appendChild(playerWins(player2.name));
//   } else if (player2.hp === 0 && player2.hp < player1.hp) {
//     $arenas.appendChild(playerWins(player1.name));
//   } else if (player1.hp === player2.hp) {
//     $arenas.appendChild(playerWins());
//   }
// })

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
  const hit = ATTACK[getRandomInt(0, 3)];
  const defence = ATTACK[getRandomInt(0, 3)];

  return {
    value: getRandomInt(0, HIT[hit]),
    hit,
    defence,
  }

}



$formFight.addEventListener('submit', function(e){
  e.preventDefault();
  const enemy = enemyAttack();
  const attack = {};

  for (let item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandomInt(0, HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  if (enemy.hit === attack.defence) {
    player1.changeHP(0);
  } else {
    player1.changeHP(enemy.value);
  }

  if (attack.hit === enemy.defence) {
    player2.changeHP(0);
  } else {
    player2.changeHP(attack.value);
  }

  player1.renderHp();
  player2.renderHp();


  if (player1.hp === 0 || player2.hp === 0) {
    $buttonFight.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWins(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWins(player1.name));
  } else if (player1.hp === player2.hp) {
    $arenas.appendChild(playerWins());
  }

  console.log('####: attack', attack);
  console.log('####: enemy', enemy);
})
