let moon = document.getElementById('moon');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    moon.style.left = value + 'px';
})