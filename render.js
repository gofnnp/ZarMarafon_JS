export function elHP() {
  const $playerLife = document.querySelector('.player'+ this.player +' .life');
  return $playerLife;
}



export function renderHp() {
  this.elHP().style.width = this.hp + '%';
  this.elHP().innerText = this.hp;
}
