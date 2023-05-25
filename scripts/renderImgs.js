import { searchByHashTags } from "./searchByHashTags.js";
import { getAll, createEl } from "./utils.js";

export function renderImgs() {
  const pinSubcontainers = [...getAll(".pin-subcontainer")];
  const data = JSON.parse(localStorage.getItem("pins"));
  data.forEach((item, index) => {
    let pinImg = createEl("img");
    pinImg.src = item.imgSrc;
    pinImg.className = "pin-image";
    pinImg.hashTag = item.hashTag;
    pinSubcontainers[index].prepend(pinImg);
  })
}

export function getImgs() {
  let dataLocalStorage = JSON.parse(localStorage.getItem("pins"));
  if (dataLocalStorage) {
    renderImgs();
    searchByHashTags();
  }
  else {
    const url = "https://63d68c2ae60d5743697ac98b.mockapi.io/api/boards/boardOne";
    let data = new Array();
    fetch(url)
      .then(response => response.json())
      .then(arr => {
        arr.map(item => {
          data.push(item);
        })
        localStorage.setItem("pins", JSON.stringify(data));
        dataLocalStorage = JSON.parse(localStorage.getItem("pins"));
        renderImgs();
        searchByHashTags();
      });
  }
}
