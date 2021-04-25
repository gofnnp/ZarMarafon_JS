import { logs, player1, player2, HIT, ATTACK } from "./objects.js";
import { elHP, renderHp } from './render.js';
import { generateLogs, getRandomInt, createElement, createPlayer } from './functions.js';
import { showResult, playerWins } from './funcResult.js';
import { $arenas, $buttonFight, $formFight, $chat } from './query.js';
import { enemyAttack, playerAttack } from './attack.js';
//Деструктуризация(вынос значений объекта в переменные)
// const { name: name1, hp: hp1 } = player1;
// const { name: name2, hp: hp2 } = player2;

generateLogs('start', player1, player2);

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

$formFight.addEventListener('submit', function(e){
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();


  if (player.defence !== enemy.hit) {
    player1.changeHP(enemy.value);
    player1.renderHp();
    generateLogs('hit', player2, player1);
  } else {
    generateLogs('defence', player2, player1);
  }
  if (enemy.defence !== player.hit) {
    player2.changeHP(player.value);
    player2.renderHp();
    generateLogs('hit', player1, player2);
  } else {
    generateLogs('defence', player1, player2);
  }

  showResult();



  console.log('####: attack', player);
  console.log('####: enemy', enemy);
})
