alert('Everytime you lose, I spend a minute in your dreams. Be warned!')
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const results = document.getElementById('display');
rockBtn.addEventListener('click', () => getComputerChoice('Rock'));
paperBtn.addEventListener('click', () => getComputerChoice('Paper'));
scissorBtn.addEventListener('click', () => getComputerChoice('Scissor'));
function getComputerChoice(picksByPlayer) {
    const picks = ['Rock', 'Paper', 'Scissor'];
    const computerChoice = picks[Math.floor(Math.random() * picks.length)];
    results.textContent = `Player: ${picksByPlayer} | Computer: ${computerChoice}`;
    if(picksByPlayer === computerChoice) {
        display.textContent = 'Draw!'
    } else if(picksByPlayer === 'Rock' && computerChoice === 'Scissor') {
        display.textContent = 'You Won!'
    } else if(picksByPlayer === 'Rock' && computerChoice === 'Paper') {
        display.textContent = 'Computer Won!'
    } else if(picksByPlayer === 'Paper' && computerChoice === 'Scissor') {
        display.textContent = 'Computer Won!'
    } else if(picksByPlayer === 'Paper' && computerChoice === 'Rock') {
        display.textContent = 'You Won!'
    } else if(picksByPlayer === 'Scissor' && computerChoice === 'Paper') {
        display.textContent ='You Won!'
    } else if(picksByPlayer === 'Scissor' && computerChoice === 'Rock') {
        display.textContent = 'Computer Won!'
    }
}
getComputerChoice();

