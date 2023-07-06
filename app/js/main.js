window.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.querySelector(".lang-select");
  const langSelect = document.querySelector(".lang-list");
  let langClicked = false;
  langBtn.addEventListener("click", () => {
    if (!langClicked) {
      langBtn.style.border = "1px solid #ff8a00";
      langSelect.style.display = "flex";
      langClicked = true;
    } else {
      langBtn.style.border = "1px solid #fff";
      langSelect.style.display = "none";
      langClicked = false;
    }
  });

  // TODO: Переписать в css
  const burgerBtn = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const headerFunctions = document.querySelector(".header__functions");
  const headerInner = document.querySelector(".header__inner");
  const header = document.querySelector(".header");
  let burgerOpened = false;
  burgerBtn.addEventListener("click", () => {
    if (!burgerOpened) {
      headerFunctions.style.display = "flex";
      headerFunctions.style.flexDirection = "column";
      headerFunctions.style.gap = "20px";

      menu.style.display = "flex";
      menu.style.alignItems = "center";
      menu.style.flexDirection = "column";
      menu.style.gap = "20px";

      headerInner.style.flexDirection = "column";
      headerInner.style.gap = "20px";

      header.style.justifyContent = "center";
      burgerOpened = true;
    } else {
      headerFunctions.style.display = "none";
      menu.style.display = "none";
      burgerOpened = false;
    }
  });
});
