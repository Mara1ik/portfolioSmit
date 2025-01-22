const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const form = document.querySelector(".contact__form");
form.action = "https://jsonplaceholder.typicode.com/posts";
form.method = "POST";

const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const messageInput = form.querySelector("#message");
const nameValidation = form.querySelector(".validation-name");
const emailValidation = form.querySelector(".validation-email");
const messageValidation = form.querySelector(".validation-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameStatus,
    emailStatus,
    messageStatus = false;

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (!name) {
    nameValidation.textContent = "Введите ваше имя";
    nameStatus = false;
  } else {
    nameValidation.textContent = "";
    nameStatus = true;
  }

  if (!EMAIL_REGEXP.test(email)) {
    emailValidation.textContent = "Неправильно введена почта";
    emailStatus = false;
  } else {
    emailValidation.textContent = "";
    emailStatus = true;
  }

  if (!message) {
    messageValidation.textContent = "Введите ваше сообщение";
    messageStatus = false;
  } else {
    messageValidation.textContent = "";
    messageStatus = true;
  }

  if (nameStatus && emailStatus && messageStatus) {
    form.submit();
  }
});
