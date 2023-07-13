window.addEventListener("DOMContentLoaded", () => {
  // language select
  const langBtn = document.querySelector("button[data-lang-button]");
  const langList = document.querySelector("div[data-lang-list]");
  const langBtnArrow = document.querySelector("img[data-lang-arrow]");

  langBtn.addEventListener("click", () => {
    langList.classList.toggle("hidden");
    langBtnArrow.classList.toggle("rotate-180");
  });

  // burger
  const burgerBtn = document.querySelector("button[data-burger]");
  const headerMenu = document.querySelector("div[data-header-menu]");
  const burgerBtnImg = burgerBtn.querySelector("img");

  const header = document.querySelector("header[data-header]");
  const headerMenuLinks = document.querySelector("div[data-header-menu-links]");
  const headerAuthBtns = document.querySelector("div[data-header-auth-buttons]");

  let burgerClosed = true;

  function headerTransform() {
    langList.classList.add("hidden");
    langBtnArrow.classList.remove("rotate-180");

    headerMenu.classList.toggle("hidden");
    headerMenu.classList.toggle("mt-6");

    header.classList.toggle("flex-col");
    header.classList.toggle("h-auto");
    header.classList.toggle("py-5");

    headerMenuLinks.classList.toggle("flex-col");
    headerMenuLinks.classList.toggle("mt-6");

    headerAuthBtns.classList.toggle("flex-col");
    headerAuthBtns.classList.toggle("mt-6");
  }

  burgerBtn.addEventListener("click", () => {
    headerTransform();
    if (burgerClosed) {
      burgerBtnImg.src = "./images/burger-close.svg";
      burgerClosed = false;
    } else {
      burgerBtnImg.src = "./images/burger-icon.svg";
      burgerClosed = true;
    }
  });

  // close the burger when a screen becomes wider
  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    const breakpoint = 768;

    if (windowWidth >= breakpoint && !burgerClosed) {
      headerTransform();
      burgerBtnImg.src = "./images/burger-icon.svg";
      burgerClosed = true;

      langList.classList.add("hidden");
      langBtnArrow.classList.remove("rotate-180");
    }
  });
});
