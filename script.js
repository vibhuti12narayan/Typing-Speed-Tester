const quotes = [
  "Stay hungry stay foolish.",
  "Practice makes perfect.",
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is awesome.",
  "Typing fast is an art."
];

const quoteDisplay = document.getElementById('quote');
const inputArea = document.getElementById('input');
const result = document.getElementById('result');
const startBtn = document.getElementById('startBtn');

let startTime, endTime;

function startGame() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerText = quotes[randomIndex];
  inputArea.value = "";
  result.innerText = "";
  inputArea.disabled = false;
  inputArea.focus();
  startTime = new Date().getTime();
}

function endGame() {
  endTime = new Date().getTime();
  let totalTime = ((endTime - startTime) / 1000); // seconds
  let totalStr = inputArea.value.trim();
  let wordCount = totalStr.split(/\s+/).length;
  let speed = Math.round((wordCount / totalTime) * 60);

  result.innerHTML = `
    ✨ You typed <span style="color:#2575fc;">${wordCount}</span> words in 
    <span style="color:#2575fc;">${totalTime.toFixed(2)}</span> seconds. 
    Your speed is <span style="color:#4caf50;">${speed} WPM</span> 🚀
  `;
}

inputArea.addEventListener('input', () => {
  let quoteText = quoteDisplay.innerText.trim();
  let userText = inputArea.value.trim();

  if (userText === quoteText) {
    inputArea.disabled = true;
    endGame();
  }
});

startBtn.addEventListener('click', startGame);
