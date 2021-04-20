const $arenas = document.querySelector('.arenas');
const $buttonFight = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');


const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};



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

generateLogs('start', player1, player2);


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


function playerAttack() {
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

  return attack;
}

function showResult() {
  if (player1.hp === 0 || player2.hp === 0) {
    $buttonFight.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWins(player2.name));
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWins(player1.name));
    generateLogs('end', player1, player2);
  } else if (player1.hp === player2.hp) {
    $arenas.appendChild(playerWins());
    generateLogs('draw');
  }
}

function generateLogs(type, player1, player2) {
  const date = new Date();
  console.log('####', type)
  const time = date.getHours() + ':' + date.getMinutes();
  switch (type) {
    case 'start':
      const start = logs['start'].replace('[player1]', player1.name).replace('[player2]', player2.name).replace('[time]', time);
      console.log(type);
      const elStart = `<p>${start}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elStart));
    case 'hit':
      const text = logs[type][0].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
      console.log(type);
      const el = `<p>${time}, ${text}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', el));
    case 'end':
      const end = logs['end'][0].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
      console.log(type);
      const elEnd = `<p>${time}, ${end}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elEnd));
    case 'draw':
      const draw = logs['draw'];
      console.log(type);
      const elDraw = `<p>${time}, ${draw}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elDraw));
  }

}

$formFight.addEventListener('submit', function(e){
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();


  if (player.defence !== enemy.hit) {
    player1.changeHP(enemy.value);
    player1.renderHp();
    generateLogs('hit', player2, player1);
  }
  if (enemy.defence !== player.hit) {
    player2.changeHP(enemy.value);
    player2.renderHp();
    generateLogs('hit', player1, player2);
  }

  showResult();



  console.log('####: attack', player);
  console.log('####: enemy', enemy);
})
