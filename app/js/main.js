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
});
