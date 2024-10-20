
function greeting() {
  const name = localStorage.getItem(USERNAME_KEY)
  const hours = parseInt(mainHour);
  if (mainPeriod === 'AM') {
    if (hours < 6) {
      return `Good Night! ${name}`;
    } else {
    }
    return `Good Morning! ${name}`;
  } else {
    if (hours < 6) {
      return `Good Afternoon! ${name}`;
    } else if (hours < 10) {
      return `The Night is Young! ${name}`;
    } else {
      return `Good Night! ${name}`;
    }
  }
  
}

function showGreeting() {

  if ($greetings.classList.contains('hidden')) {
    $greetings.textContent = ""
  } else {
    $greetings.textContent = greeting();
  }
}
setInterval(showGreeting, 3000)
