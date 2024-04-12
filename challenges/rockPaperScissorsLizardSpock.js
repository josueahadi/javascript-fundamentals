function rpsls(player1, player2) {
    const rules = {
        rock: ['lizard', 'scissors'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
    };
    if (player1 == player2) return 'Draw!';
    if (rules[player1].includes(player2)) {
        return 'Player 1 Won!'; 
    } else {
        return 'Player 2 Won!'
    }
}
console.log(rpsls("rock", "rock"));