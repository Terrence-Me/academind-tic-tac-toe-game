function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('please set custom player names for both players');
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = 'block';
}

function swtichPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  if (e.target.tagName !== 'LI') {
    return;
  }

  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add('disabled');
  swtichPlayer();
}
