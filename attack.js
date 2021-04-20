import { getRandomInt } from './functions.js';
import { logs, player1, player2, HIT, ATTACK } from "./objects.js";
import { $arenas, $buttonFight, $formFight, $chat } from './query.js';

export function changeHP(randomInt) {
  this.hp -= randomInt;
  if (this.hp < 0) {
    this.hp = 0;
  }
};
export const enemyAttack = () => {
  const hit = ATTACK[getRandomInt(0, 3)];
  const defence = ATTACK[getRandomInt(0, 3)];

  return {
    value: getRandomInt(0, HIT[hit]),
    hit,
    defence,
  }

};
export const playerAttack = () => {
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
};
