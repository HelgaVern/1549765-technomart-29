const formLink = document.querySelector(".write");
const formPopup = document.querySelector(".modal-write");
const formClose = formPopup.querySelector(".modal-close");
const writeForm = formPopup.querySelector(".write-form");
const formLogin = formPopup.querySelector(".email-write");
const formName = formPopup.querySelector(".name-write");


let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

formLink.addEventListener("click", function () {
    evt.preventDefault();
    formPopup.classList.add("modal-show");
    if (storage) {
        formLogin.value = storage;
        formName.focus();
  } else {
    formLogin.focus();
      }
});

formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-show");
    formPopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
    if (!formLogin.value || !formName.value) {
        evt.preventDefault();
        formPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", formLogin.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (formPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        formPopup.classList.remove("modal-show");
        formPopup.classList.remove("modal-error");
      }
    }
  });