import { getAll } from "./utils";

export function showPinMenu(item, index) {
    const pinsDropdown = getAll(".main__pin-dropdown");
    item.addEventListener('click', () => {
      pinsDropdown.forEach(i => {
        i !== pinsDropdown[index] && i.className.includes('show') && removeShow(i);
      })
      toggleShow(pinsDropdown[index]);
    })

    window.addEventListener("click", e => {
      if (!e.target.closest(".modal2")) {
        removeShow(pinsDropdown[index]);
      }
    })
}

export function toggleShow(e) {
  e.classList.toggle('show');
}

export function removeShow(e) {
  e.classList.remove('show');
}