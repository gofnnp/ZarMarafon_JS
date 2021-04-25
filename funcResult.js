import { player1, player2 } from "./objects.js";
import { $arenas, $buttonFight, $formFight, $chat } from './query.js';
import { generateLogs, getRandomInt, createElement, createPlayer } from './functions.js';
import { enemyAttack, playerAttack } from './attack.js';

export const showResult = () => {
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
};
export const playerWins = (name) => {
  const $loseTitle = createElement('div', 'loseTitle');
  if (player1.hp != player2.hp) {
    $loseTitle.innerText = name + ' wins';
  } else if (player1.hp === 0 && player2.hp === 0) {
    $loseTitle.innerText = 'Draw';
  }

  return $loseTitle;
};
export const createReloadButton = () => {
  const $reloadWrap = createElement('div', 'reloadWrap');
  $arenas.appendChild($reloadWrap);

  const $createReloadButton = createElement('button', 'button');
  $createReloadButton.innerText = 'Restart';
  $reloadWrap.appendChild($createReloadButton);

  $createReloadButton.addEventListener('click', function() {
    window.location.reload();
  })
};
