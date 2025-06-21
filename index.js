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
)

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