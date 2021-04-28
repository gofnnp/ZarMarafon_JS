import { logs, player1, player2, HIT, ATTACK } from "./objects.js";
import { $arenas, $buttonFight, $formFight, $chat } from './query.js';



export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;



export function attack() {
  console.log(player.name + ' '  + "Fight...");
};

export function generateLogs(type, player1, player2) {
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
      const text = logs[type][getRandomInt(0, logs[type].length)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
      console.log(type);
      const el = `<p>${time}, ${text}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', el));
    case 'defence':
      const textDef = logs[type][getRandomInt(0, logs[type].length)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
      console.log(type);
      const elDef = `<p>${time}, ${textDef}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elDef));
    case 'end':
      const end = logs['end'][getRandomInt(0, logs[type].length)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
      console.log(type);
      const elEnd = `<p>${time}, ${end}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elEnd));
    case 'draw':
      const draw = logs['draw'];
      console.log(type);
      const elDraw = `<p>${time}, ${draw}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elDraw));
    default:
      const def = 'Нет такой команды('
      console.log(type);
      const elDefault = `<p>${time}, ${def}</p>`;
      return($chat.insertAdjacentHTML('afterbegin', elDefault));
  }

};



export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
};
