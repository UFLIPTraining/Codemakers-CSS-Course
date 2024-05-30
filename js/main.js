document.addEventListener("DOMContentLoaded", function () {
  const toggleNavButton = document.getElementById("toggle-nav");
  const toggleImg = document.getElementById("toggle-img");
  const navBar = document.getElementById("nav-bar");

  toggleNavButton.addEventListener("click", function () {
    if (navBar.style.transform === "translateX(-220px)") {
      navBar.style.transform = "translateX(0)";
      toggleImg.classList.remove("rotated");
    } else {
      navBar.style.transform = "translateX(-220px)";
      toggleImg.classList.add("rotated");
    }
  });
});
