import { getAll, getOne } from "./utils.js";
import { openDropdown } from "./openDropdown.js";
import { getImgs } from "./renderImgs.js";
import { closeAllDropdowns } from "./closeDropdown.js";
import { showPinMenu, toggleShow, removeShow } from "./toggleShow.js";
import { bodyLock, bodyUnLock } from "./bodyLocks.js";
import { hidePins } from "./hidePins.js";

getOne("#addPinButton").addEventListener("click", () => {
  openDropdown('header__create-dropdown');
});

getOne("#addBoardButton").addEventListener("click", () => {
  openDropdown('header__board-dropdown');
});

window.onclick = function (e) {
  closeAllDropdowns(e);
}

getAll(".modal2").forEach(showPinMenu);

hidePins();

getImgs();


getAll(".boardBtn").forEach((el) => {
  const boardOverlay = document.querySelector(".modal-board-overlay");
  el.addEventListener("click", function () {
    toggleShow(boardOverlay);
    bodyLock();
  });
  boardOverlay.addEventListener("click", function (e) {
    if (e.target === boardOverlay) {
      removeShow(boardOverlay);
      bodyUnLock()
    };
  });
});

getOne(".cancelBoardBtn").addEventListener("click", () => {
  const boardOverlay = document.querySelector(".modal-board-overlay");
  removeShow(boardOverlay);
  bodyUnLock()
});

getAll(".complaintBtn").forEach((el) => {
  const complaintlOverlay = document.querySelector(".modal-complaint-overlay");
  el.addEventListener("click", function () {
    toggleShow(complaintlOverlay);
    bodyLock();
  });
});

getOne(".cancelComplaintBtn").addEventListener("click", () => {
  const complaintlOverlay = document.querySelector(".modal-complaint-overlay");
  removeShow(complaintlOverlay);
  bodyUnLock()
});

getOne(".modal-complaint-overlay").addEventListener("click", function (e) {
  const complaintlOverlay = document.querySelector(".modal-complaint-overlay");
  if (e.target === complaintlOverlay) {
    removeShow(complaintlOverlay);
    bodyUnLock()
  };
});

































