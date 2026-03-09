function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

window.addEventListener('resize', function() {
    if (this.window.innerWidth > 1024) {
        closeMenu();
    }
})