const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#username");
const greeting = document.querySelector("#greeting");

const Hidden_ClassName = "hidden";
const Username_Key = "username";

function Login(event) {
  event.preventDefault();
  loginform.classList.add(Hidden_ClassName);
  const nickname = loginInput.value;
  localStorage.setItem(Username_Key, nickname);
  printGreeting(nickname);
}

function printGreeting(username) {
  greeting.innerText = `${username}님 안녕하세요!`;
  greeting.classList.remove(Hidden_ClassName);
}

const savedusername = localStorage.getItem(Username_Key);

if (savedusername === null) {
  loginform.classList.remove(Hidden_ClassName);
  loginform.addEventListener("submit", Login);
} else {
  printGreeting(savedusername);
}
