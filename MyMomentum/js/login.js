const $loginForm = document.querySelector('#login-form');
const $loginInput = $loginForm.querySelector('input.login');
const $loginButton = $loginForm.querySelector('button');

const $greetings = document.querySelector('form#greetings div.greetings')
const $clockForm = document.querySelector('#clock');
const $quoteForm = document.querySelector('#quote')
const $quote = $quoteForm.querySelector('div.word');
const $author = $quoteForm.querySelector('div.author');
const $todoForm = document.querySelector('#todo-form');
const $weatherForm = document.querySelector('form#weather');
const $listOfTodos = document.querySelector('ul#todos');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
let weatherKey = prompt(`What is your 'openweathermap.org' API key?`)

let userName;

const onLoginSubmit = (event) => {
  event.preventDefault();
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  userName = $loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintScreen(userName);
};

const onLoginInput = (event) => {
  event.preventDefault();
};
const onApiKeyInput = (event) => {
  event.preventDefault();
};

$loginInput.addEventListener('input', onLoginInput);

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintScreen(userName) {
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  $greetings.classList.remove(HIDDEN_CLASSNAME);
  $clockForm.classList.remove(HIDDEN_CLASSNAME);
  $quoteForm.classList.remove(HIDDEN_CLASSNAME);
  $todoForm.classList.remove(HIDDEN_CLASSNAME);
  $weatherForm.classList.remove(HIDDEN_CLASSNAME);
  $listOfTodos.classList.remove(HIDDEN_CLASSNAME);
  console.log($loginForm.classList)
  
}

if (savedUsername === null) {
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintScreen(savedUsername);
}
