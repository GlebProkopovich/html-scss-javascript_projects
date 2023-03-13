import { getAll, getOne } from "./utils";

export function searchByHashTags() {
  const searchBar = getOne("#searchbar");

  searchBar.oninput = function () {
    let val = this.value.trim().toLowerCase();
    const pinImgs = getAll(".pin-image");
    const pinContainers = getAll(".pin-container");

    if (val != "") {
      pinImgs.forEach((item, index) => {
        if (item.hashTag.search(val) == -1) {
          pinContainers[index].classList.add("hide");
        }
        else {
          pinContainers[index].classList.remove("hide");
        }
      })
    }

    else {
      pinImgs.forEach((item, index) => {
        pinContainers[index].classList.remove("hide");
      })
    }
  }
}