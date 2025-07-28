document.getElementById('hamburger').onclick = function() {
    const menu = document.getElementById('nav-menu');
    let hamburger = document.getElementById('hamburger');
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        hamburger.innerHTML = '&times;';
    } else {
        hamburger.innerHTML = '&#9776;';
    }
};

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        answer.style.display = "block";
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}
;

const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(
    function(link) {
    link.addEventListener('click', function(){
            const menu = document.getElementById('nav-menu');
            let hamburger = document.getElementById('hamburger');
            menu.classList.remove('show');
            hamburger.innerHTML = '&#9776';
        })
    }
);

const sections = Array.from(navLinks)
  .map(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      return document.querySelector(href);
    }
    return null;
  })
  .filter(section => section !== null);

window.addEventListener('scroll', () => {
  let currentSectionId = '';
  const scrollPos = window.scrollY;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('nav-link-active');
    const href = link.getAttribute('href');

    if (href === '/') {
      if (currentSectionId === '' && window.location.pathname === '/') {
        link.classList.add('nav-link-active');
      }
    } else if (href === `#${currentSectionId}`) {
      link.classList.add('nav-link-active');
    }
  });
});

document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    if (nav.classList.contains('show') &&
        !nav.contains(event.target) &&
        !hamburger.contains(event.target)) {
        nav.classList.remove('show');
        hamburger.innerHTML = '&#9776;';
    }
});
