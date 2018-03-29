var feedbackLink = document.querySelector(".btn-feedback");

var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");

var form = feedbackPopup.querySelector("form");
var username = feedbackPopup.querySelector("[name=username]");
var email = feedbackPopup.querySelector("[name=email]");
var letter = feedbackPopup.querySelector("[name=letter]");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  username.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !letter.value) {
    evt.preventDefault();
    username.classList.add("invalid");
    email.classList.add("invalid");
    letter.classList.add("invalid");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
    }
  }
});
