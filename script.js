const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);

  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  });
});
