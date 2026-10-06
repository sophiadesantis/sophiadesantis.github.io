/* =========================================================
   SOPHIA DESANTIS — PORTFOLIO
   Version 1
========================================================= */


/* ---------------------------------------------------------
   MOBILE NAVIGATION
--------------------------------------------------------- */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const navigationLinks = document.querySelectorAll(".main-nav a");


if (menuToggle && navigation) {

  menuToggle.addEventListener("click", () => {

    const menuIsOpen =
      document.body.classList.toggle("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      menuIsOpen.toString()
    );

    menuToggle.setAttribute(
      "aria-label",
      menuIsOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });


  navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

      document.body.classList.remove("menu-open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });

}


/* ---------------------------------------------------------
   SCROLL REVEAL
--------------------------------------------------------- */

const revealElements =
  document.querySelectorAll(".reveal");


const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (prefersReducedMotion) {

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

} else {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

}


/* ---------------------------------------------------------
   CLOSE MOBILE MENU WITH ESCAPE KEY
--------------------------------------------------------- */

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    document.body.classList.contains("menu-open")
  ) {

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

    menuToggle.focus();

  }

});


/* ---------------------------------------------------------
   AUTOMATIC COPYRIGHT YEAR
   Available if a year element is added later using:
   <span data-current-year></span>
--------------------------------------------------------- */

const yearElement =
  document.querySelector("[data-current-year]");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}
