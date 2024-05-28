let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = Number(guessInput.value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    
    attempts++;
    
    if (guess === randomNumber) {
        message.textContent = 'Cagada do caramba, PARABÉNS!!';
        message.style.color = 'green';
        guessInput.disabled = true;
    } else if (guess > randomNumber) {
        message.textContent = 'Muito alto! Tenta de novo, tu vai conseguir.';
        message.style.color = 'red';
    } else if (guess < randomNumber) {
        message.textContent = 'Muito baixo! Tenta de novo, tu vai conseguir.';
        message.style.color = 'red';
    }
    
    attemptsDisplay.textContent = `Tentativas: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 101);
    attempts = 0;
    document.getElementById('guessInput').disabled = false;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}
