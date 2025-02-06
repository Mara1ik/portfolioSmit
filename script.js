const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const form = document.querySelector(".contact__form");
form.action = "https://jsonplaceholder.typicode.com/posts";
form.method = "POST";

const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const messageInput = form.querySelector("#message");
const checkboxInput = form.querySelector("#checkbox");
const nameValidation = form.querySelector(".validation-name");
const emailValidation = form.querySelector(".validation-email");
const messageValidation = form.querySelector(".validation-message");
const checkboxValidation = form.querySelector(".validation-checkbox");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameStatus,
    emailStatus,
    messageStatus,
    checkboxStatus = false;

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  const checkbox = checkboxInput.checked;

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

  if (!checkbox) {
    checkboxValidation.textContent = "*";
    checkboxStatus = false;
  } else {
    checkboxValidation.textContent = "";
    checkboxStatus = true;
  }

  if (nameStatus && emailStatus && messageStatus && checkboxStatus) {
    form.submit();
  }
});

const burgerBut = document.querySelector(".header__burger");
const crossBut = document.querySelector(".navbar__cross");

const navBar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const headerContainer = header.querySelector(".header__container");
const useful = document.querySelector(".useful");
const usefulContainer = useful.querySelector(".useful__container");

const experienceLink = document.querySelector("#experienceLink");
const contactLink = document.querySelector("#contactLink");

const openNavBar = () => {
  document.body.style.overflow = "hidden";
  navBar.style.display = "block";
  header.style.opacity = 0.25;
  headerContainer.style.border = "none";
  useful.style.opacity = 0.25;
  usefulContainer.style.border = "none";
};

const closeNavBar = () => {
  document.body.style.overflow = "";
  navBar.style.display = "none";
  header.style.opacity = 1;
  headerContainer.style.cssText =
    "border: 1rem solid #000; border-bottom: none;";
  useful.style.opacity = 1;
  usefulContainer.style.cssText =
    "border: 1rem solid #000; border-top: none;  border-bottom: none;";
};

const scroll = (height) => {
  closeNavBar();
  const deafultWidth = window.innerWidth <= 320 ? 320 : 1920;
  window.scrollTo(0, height / (deafultWidth / window.innerWidth));
};

burgerBut.addEventListener("click", openNavBar);
crossBut.addEventListener("click", closeNavBar);
experienceLink.addEventListener("click", () => {
  const height = window.innerWidth <= 320 ? 640 : 800;
  scroll(height);
});
contactLink.addEventListener("click", () => {
  const height = window.innerWidth <= 320 ? 1890 : 1600;
  scroll(height);
});
