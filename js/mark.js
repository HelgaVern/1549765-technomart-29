const markLink = document.querySelector(".button-catalog-buy");
const markPopup = document.querySelector(".modal-mark");
const markClose = markPopup.querySelector(".modal-close");

document.querySelectorAll(".button-catalog-buy").forEach (markLink => markLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    markPopup.classList.add("modal-show");
}));

markLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    markPopup.classList.add("modal-show");
});

markClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    markPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (markPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            markPopup.classList.remove("modal-show");
        }
    }
});