window.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.querySelector("button[data-lang-button]");
  const langList = document.querySelector("div[data-lang-list]");

  langBtn.addEventListener("click", () => {
    langList.classList.toggle("hidden");
  });
});
