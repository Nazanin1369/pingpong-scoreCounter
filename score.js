// Define all your elements on the top
const p1ButtonEl = document.getElementById('p1Button');
const p2Button = document.getElementById('p2Button');
const p1DisplayEl = document.getElementById('p1Display');
const p2DisplayEl = document.getElementById('p2Display');
const resetButton = document.getElementById('reset');
const winningScoreSelect = document.getElementById('playto');

// Define event Listeners
p1ButtonEl.addEventListener('click', function () {
    updateScores(p1, p2)
});

p2Button.addEventListener('click', function () {
    updateScores(p2, p1)
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
});

resetButton.addEventListener('click', reset);

// Define all const and lets
const p1 = {
    score: 0,
    button: p1ButtonEl,
    display: p1DisplayEl
}
const p2 = {
    score: 0,
    button: p2ButtonEl,
    display: p2DisplayEl
}
let winningScore = 3;
let isGameOver = false;


/**
* It updates the scores
* @param {object} player - the first player
* @param {object} opponent - the second player
*/
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

/**
* It resets the scores
*/
function reset(){
	isGameOver = false;
	for(let p of [p1, p2]){
        p.button.disabled = false;
        p.display.textContent = 0;
        p.score = 0;
        p.display.classList.remove('has-text-danger', 'has-text-success');
    }
}




