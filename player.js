import { createElement } from './functions.js';

export class Player {
  constructor(props) {
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.player = props.player;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;
  }

  elHP = () => {
    const $playerLife = document.querySelector(`.${this.selector} .life`);
    return $playerLife;
  }

  changeHP = (randomInt) => {
    this.hp -= randomInt;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  renderHp = () => {
    this.elHP().style.width = this.hp + '%';
    this.elHP().innerText = this.hp;
  }

  createPlayer = () => {
    const $life = createElement('div', 'life');
    $life.innerText = this.hp;
    $life.style.width = this.hp+'%';

    const $name = createElement('div', 'name');
    $name.innerText = this.name;

    const $progressbar = createElement('div', 'progressbar');
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = createElement('img');
    $img.src = this.img;

    const $character = createElement('div', 'character');
    $character.appendChild($img);

    const $player = createElement('div', this.selector);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $root = document.querySelector(`.${this.rootSelector}`);
    $root.appendChild($player);

    return $player;
  };
}
