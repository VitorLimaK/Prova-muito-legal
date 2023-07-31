const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');
const nameElement = document.getElementById('userName');
let userName = '';

function calculateAge() {
  const day = parseInt(document.getElementById('dayInput').value);
  const month = parseInt(document.getElementById('monthInput').value);
  const year = parseInt(document.getElementById('yearInput').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (isNaN(ageInYears)) {
    resultMessage.textContent = 'Por favor, insira uma data válida.';
  } else {
    const age = Math.floor(ageInYears);
    const ageMessage = age === 1 ? 'ano' : 'anos';
    resultMessage.textContent = `Você tem ${age} ${ageMessage}.`;

    if (age >= 18) {
      resultMessage.textContent += ` Você é maior de idade ${userName}!`;
    } else {
      resultMessage.textContent += ` Você é menor de idade ${userName}!`;
    }
  }
}

// Function to ask for the user's name
function askForName() {
  const name = prompt("Digite seu nome:");
  return name || "";
}

// Get the user's name when the page loads
userName = askForName();
nameElement.textContent = userName;

checkButton.addEventListener('click', function() {
  userName = nameElement.textContent.trim();
  calculateAge();
});

document.getElementById('resetButton').addEventListener('click', function() {
  // Reload the page to show the prompt again
  window.location.reload();
});
