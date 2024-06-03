// document.addEventListener("DOMContentLoaded", function () {
//   const toggleNavButton = document.getElementById("toggle-nav");
//   const toggleImg = document.getElementById("toggle-img");
//   const navBar = document.getElementById("nav-bar");

//   toggleNavButton.addEventListener("click", function () {
//     if (navBar.style.transform === "translateX(-220px)") {
//       navBar.style.transform = "translateX(0)";
//       toggleImg.classList.remove("rotated");
//     } else {
//       navBar.style.transform = "translateX(-220px)";
//       toggleImg.classList.add("rotated");
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      fetch(href)
        .then(response => response.text())
        .then(html => {
          document.getElementById('main-content').innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('main-content').innerHTML;
          window.history.pushState({ path: href }, '', href);
        });
    });
  });
});
