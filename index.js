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