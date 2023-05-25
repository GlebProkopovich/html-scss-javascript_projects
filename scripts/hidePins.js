import { getAll } from "./utils.js";

export function hidePins() {

  getAll(".hidePin").forEach((item, index) => {
    item.addEventListener("click", () => {
      const pinContainers = getAll(".pin-container");
      pinContainers[index].style.display = 'none';
    })
  })
}