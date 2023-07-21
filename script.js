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
  let burgerBtnImg;
  if (burgerBtn) {
    burgerBtnImg = burgerBtn.querySelector("img");
  }

  const header = document.querySelector("header[data-header]");
  const headerMenuLinks = document.querySelector("div[data-header-menu-links]");
  const headerAuthBtns = document.querySelector("div[data-header-auth-buttons]");

  let burgerClosed = true;

  function headerTransform() {
    if (langList && langBtnArrow) {
      langList.classList.add("hidden");
      langBtnArrow.classList.remove("rotate-180");
    }

    if (headerMenu) {
      headerMenu.classList.toggle("hidden");
      headerMenu.classList.toggle("mt-6");
    }

    if (header) {
      header.classList.toggle("flex-col");
      header.classList.toggle("h-auto");
      header.classList.toggle("py-5");
    }

    if (headerMenuLinks) {
      headerMenuLinks.classList.toggle("flex-col");
      headerMenuLinks.classList.toggle("mt-6");
      headerMenuLinks.classList.toggle("gap-6");
      headerMenuLinks.classList.toggle("gap-4");
    }

    if (headerAuthBtns) {
      headerAuthBtns.classList.toggle("flex-col");
      headerAuthBtns.classList.toggle("mt-6");
    }
  }

  if (burgerBtn && burgerBtnImg) {
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
  }

  // burger on crm's pages
  const asideLinks = document.querySelectorAll("div[data-aside-links]");
  const asideSetting = document.querySelector("div[data-aside-setting]");
  const asideBurger = document.querySelector("button[data-aside-burger]");
  const asideBurgerImg = document.querySelector("img[data-aside-burger-img]");

  let asideBurgerClosed = true;

  if (asideBurger) {
    asideBurger.addEventListener("click", () => {
      if (asideBurgerClosed) {
        asideLinks.forEach((bunchOfLinks) => {
          bunchOfLinks.classList.remove("hidden");
          bunchOfLinks.classList.add("flex");
        });

        asideSetting.classList.toggle("hidden");
        asideBurgerImg.src = "./images/burger-close--white.svg";
        asideBurgerClosed = false;
      } else {
        asideLinks.forEach((bunchOfLinks) => {
          bunchOfLinks.classList.add("hidden");
          bunchOfLinks.classList.remove("flex");
        });

        asideSetting.classList.toggle("hidden");
        asideBurgerImg.src = "./images/burger-icon--white.svg";
        asideBurgerClosed = true;
      }
    });
  }

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

  // email confirmation's inputs logic
  const emailConfirmInputsWrapper = document.querySelector("div[data-confirm-input]");
  let emailConfirmInputs = null;

  if (emailConfirmInputsWrapper) {
    emailConfirmInputs = emailConfirmInputsWrapper.querySelectorAll("input");
  }

  if (emailConfirmInputs) {
    emailConfirmInputs.forEach((input) => {
      input.oninput = function (event) {
        let target = event.target;
        if (target.value.length > target.maxLength) {
          target.value = target.value.slice(0, target.maxLength);
        }

        let nextInput = target.nextElementSibling;
        if (nextInput && event.inputType !== "deleteContentBackward") {
          target.nextElementSibling.focus();
        }
      };
    });
  }

  // Toggle search panel
  const toggleSearchPanelBtn = document.querySelector("button[data-search-hide-btn]");
  const searchPanel = document.querySelector("div[data-search-panel]");

  let searchPanelOpened = true;

  toggleSearchPanelBtn.addEventListener("click", (e) => {
    if (searchPanelOpened) {
      searchPanel.classList.remove("flex");
      searchPanel.classList.add("hidden");
      e.target.textContent = "show more options";

      searchPanelOpened = false;
    } else {
      searchPanel.classList.add("flex");
      searchPanel.classList.remove("hidden");
      e.target.textContent = "hide options";

      searchPanelOpened = true;
    }
  });
});
