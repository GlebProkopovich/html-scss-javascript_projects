import { getOne } from "./utils.js";

export function bodyLock() {
  const body = getOne('body');
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
}

export function bodyUnLock() {
  const body = getOne('body');
  body.style.paddingRight = '0px';
  body.classList.remove('lock');
}