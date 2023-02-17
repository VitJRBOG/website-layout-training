var navBarButton = document.getElementById("navbar-toggler-icon");

hamburgerMenu = document.getElementsByName("hamburger-menu")[0];

function showMenu() {
    if (hamburgerMenu.style.display == "none") {
        hamburgerMenu.style.display = "block"
        return
    }

    hamburgerMenu.style.display = "none";
}

navBarButton.onclick = showMenu;
