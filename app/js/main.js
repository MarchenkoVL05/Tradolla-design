window.addEventListener("DOMContentLoaded", () => {
  // Language choosing
  let languageChoose = document.querySelector(".lang");
  let langList = document.querySelector(".lang__list");
  let languageChooseArrow = languageChoose.querySelector("img");
  let langListOpened = false;
  languageChoose.addEventListener("click", () => {
    if (langListOpened) {
      langList.classList.remove("langDropdownShow");
      languageChooseArrow.style.transform = "rotate(0)";
      langListOpened = false;
    } else {
      langList.classList.add("langDropdownShow");
      languageChooseArrow.style.transform = "rotate(-180deg)";
      langListOpened = true;
    }
  });

  // Burger
  let burgerIcon = document.querySelector(".burger");
  let headerMenu = document.querySelector(".header__menu");
  let headerFuncs = document.querySelector(".header__funcs");

  let burgerLine = document.querySelectorAll(".burger__line");

  let burgerMenuOpened = false;

  burgerIcon.addEventListener("click", () => {
    headerMenu.classList.toggle("burgerMenuShow");
    headerFuncs.classList.toggle("burgerMenuShow");
    if (burgerMenuOpened) {
      // also close language dropdown
      langList.classList.remove("langDropdownShow");
      languageChooseArrow.style.transform = "rotate(0)";
      langListOpened = false;

      burgerLine.forEach((line, index) => {
        if (index == 0) {
          burgerLine[index].style.top = "0";
          burgerLine[index].style.transform = "rotate(0)";
        }
        if (index == 1) {
          burgerLine[index].style.transform = "rotate(0)";
          burgerLine[index].style.opacity = "1";
        }
        if (index == 2) {
          burgerLine[index].style.bottom = "0";
          burgerLine[index].style.transform = "rotate(0)";
        }
      });

      burgerMenuOpened = false;
    } else {
      burgerLine.forEach((line, index) => {
        if (index == 0) {
          burgerLine[index].style.top = "10px";
          burgerLine[index].style.transform = "rotate(45deg)";
        }
        if (index == 1) {
          burgerLine[index].style.transform = "rotate(45deg)";
          burgerLine[index].style.opacity = "0";
        }
        if (index == 2) {
          burgerLine[index].style.bottom = "10px";
          burgerLine[index].style.transform = "rotate(-45deg)";
        }
      });

      burgerMenuOpened = true;
    }
  });
});
