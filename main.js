const player1 = {
  name: 'scorpion',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'gun'],
  attack: function() {
    console.log(player.name + ' '  + "Fight...")
  },
}

const player2 = {
  name: 'SUB-ZERO',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['knife', 'gun'],
  attack: function() {
    console.log(player.name + ' '  + "Fight...")
  },
}

const createPlayer = (classPlayer, player) => {
  const $life = document.createElement('div');
  $life.innerText = player.hp;
  $life.classList.add('life');
  $life.style.width = '100%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = player.name;

  const $progressbar = document.createElement('div');
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $progressbar.classList.add('progressbar');

  const $img = document.createElement('img');
  $img.src = player.img;

  const $character = document.createElement('div');
  $character.appendChild($img);
  $character.classList.add('character');

  const $player1 = document.createElement('div');
  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $player1.classList.add(classPlayer);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
