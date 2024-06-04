document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      fetch(href)
        .then(response => response.text())
        .then(html => {
          document.querySelector('main').innerHTML = new DOMParser().parseFromString(html, 'text/html').querySelector('main').innerHTML;
          window.history.pushState({ path: href }, '', href);
          document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
          this.classList.add('active');
        });
    });
  });
});
