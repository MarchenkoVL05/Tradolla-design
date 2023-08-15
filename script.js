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

  // Squeeze menu
  const squeezeMenu = document.querySelector("[data-squezee-menu]");
  const asideLogo = document.querySelector("[data-aside-logo]");
  const asideMenu = document.querySelector("aside");
  const asideHidden = document.querySelector("[data-aside-hidden]");

  let asideOpened = true;

  function squeezeMenuFunc() {
    if (asideLinks) {
      asideLinks.forEach((linksGroup) => {
        linksGroup.classList.toggle("lg:flex");
      });
    }

    if (asideSetting && asideLogo) {
      asideSetting.classList.toggle("lg:block");
      asideLogo.classList.toggle("hidden");
    }

    if (asideMenu) {
      asideMenu.classList.toggle("lg:w-72");
      asideMenu.classList.toggle("w-16");
      asideMenu.querySelector("div").classList.toggle("items-center");
    }

    if (asideHidden) {
      asideHidden.classList.toggle("lg:w-72");
      asideHidden.classList.toggle("w-16");
    }

    asideOpened = !asideOpened;
  }

  if (squeezeMenu) {
    squeezeMenu.addEventListener("click", () => {
      squeezeMenuFunc();
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

    if (windowWidth < 1024 && !asideOpened) {
      squeezeMenuFunc();
    }

    if (windowWidth >= 1024 && !asideBurgerClosed) {
      asideLinks.forEach((bunchOfLinks) => {
        bunchOfLinks.classList.add("hidden");
        bunchOfLinks.classList.remove("flex");
      });

      asideSetting.classList.toggle("hidden");
      asideBurgerImg.src = "./images/burger-icon--white.svg";
      asideBurgerClosed = true;
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

  // product details tabs
  const pdTabs = document.querySelectorAll("div[data-pd-tab]");
  const pdContents = document.querySelectorAll("[data-pd-content]");

  if (pdTabs) {
    pdTabs.forEach((tab, tabIndex) => {
      tab.addEventListener("click", () => {
        tab.classList.add("text-orange-500");
        tab.classList.add("border-b-2");
        tab.classList.add("border-orange-500");
        pdTabs.forEach((t, i) => {
          if (tabIndex !== i) {
            t.classList.remove("text-orange-500");
            t.classList.remove("border-b-2");
            t.classList.remove("border-orange-500");
          }
        });
        pdContents.forEach((content, contentIndex) => {
          if (tabIndex === contentIndex) {
            content.classList.remove("hidden");
          } else {
            content.classList.add("hidden");
          }
        });
      });
    });
  }

  // toggle aside menu links
  const asideMenus = document.querySelectorAll("[data-aside-menu]");

  if (asideMenus) {
    asideMenus.forEach((menu) => {
      menu.addEventListener("click", () => {
        const links = menu.parentElement.querySelectorAll("a");
        const menuArrowIcon = menu.querySelector("[data-aside-menu-img]");
        menuArrowIcon.classList.toggle("rotate-180");
        links.forEach((link) => {
          link.classList.toggle("hidden");
        });
      });
    });
  }

  // select all product positions of offer
  const selectAllProducts = document.querySelector("[data-select-all-product]");

  if (selectAllProducts) {
    selectAllProducts.addEventListener("click", () => {
      document.querySelectorAll("input").forEach((input) => {
        input.setAttribute("checked", "true");
      });
    });
  }

  // Chat: open/close contacts
  const contactsBtn = document.querySelector("[data-contacts-button]");
  const chat = document.querySelector("[data-chat]");
  const contacts = document.querySelector("[data-contacts]");
  const contactCards = document.querySelectorAll("[data-contact]");

  function toggleChat() {
    chat.classList.toggle("hidden");
    contacts.classList.toggle("hidden");
    contacts.classList.toggle("basis-64");
    contacts.classList.toggle("basis-full");
  }

  if (contactsBtn) {
    contactsBtn.addEventListener("click", () => {
      toggleChat();
    });
  }

  // show chat and contacts when a screen becomes wider
  if (chat && contacts) {
    window.addEventListener("resize", () => {
      const windowWidth = window.innerWidth;
      const breakpoint = 1024;

      if (windowWidth >= breakpoint) {
        if (chat.classList.contains("hidden")) {
          chat.classList.remove("hidden");
          contacts.classList.add("hidden");
          contacts.classList.toggle("basis-64");
          contacts.classList.toggle("basis-full");
        }
      }
    });
  }

  // open chat with user
  if (contactCards) {
    contactCards.forEach((card) => {
      card.addEventListener("click", () => {
        if (chat.classList.contains("hidden")) {
          toggleChat();
        }
      });
    });
  }
});
