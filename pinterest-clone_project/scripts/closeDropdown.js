export function closeAllDropdowns(e) {
  const dropdownClassList = [
    {
      dropDownClass: '.addPinButton',
      dropDownContentClass: 'dropdown-content'
    },
    {
      dropDownClass: '.addBoardButton',
      dropDownContentClass: 'dropdown-board'
    }
  ];
  dropdownClassList.forEach(x => closeDropdown(e, x.dropDownClass, x.dropDownContentClass));
}

function closeDropdown(event, dropDownClass, dropDownContentClass) {
  if (!event.target.matches(dropDownClass)) {
    let dropdowns = document.getElementsByClassName(dropDownContentClass);
    let i;

    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}