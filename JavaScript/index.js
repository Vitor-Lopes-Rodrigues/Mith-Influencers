const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");
const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
    mobileMenu.style.display = 'flex';  // TBota o botao hamburguer na tela
});

closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
    mobileMenu.style.display = 'none';
});
