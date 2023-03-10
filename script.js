///////////////////////////showmenu
let showMenu = (toggleId, navId) => {
  let toggle = document.getElementById(toggleId);
  let nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    //add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");
//////////////////dropdown menu
const dropdownItems = document.querySelectorAll(".dropdown__item");
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");
  dropdownButton.addEventListener("click", () => {
    const showDropdown = document.querySelector(".show-dropdown");
    toggleItem(item);
    if (showDropdown && showDropdown != item) {
      toggleItem(showDropdown);
    }
  });
});

const toggleItem = (item) => {
  const dropdownContainer = item.querySelector(".dropdown__container");

  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

//delete dropdown style
const mediaQuery = matchMedia("(min-width: 1118px)");
const dropdownContainer = document.querySelectorAll(".dropdown__container");

const removeStyle = () => {
  if (mediaQuery.matches) {
    dropdownContainer.forEach((e) => {
      e.removeAttribute("style");
    });
    dropdownItems.forEach((e) => {
      e.classList.remove("show-dropdown");
    });
  }
};

addEventListener("resize", removeStyle);
