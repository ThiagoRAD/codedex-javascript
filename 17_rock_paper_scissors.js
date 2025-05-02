const options = {
  0: "Rock",
  1: "Paper",
  2: "Scissors",
}

const getRandomOption = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}
const player1 = getRandomOption();
const player2 = getRandomOption();

console.log("Player 1: " + player1);
console.log("Player 2: " + player2);

if (player1 === player2) {
  console.log("It's a tie!");
} else if (
  (player1 === "Rock" && player2 === "Scissors") ||
  (player1 === "Paper" && player2 === "Rock") ||
  (player1 === "Scissors" && player2 === "Paper")
) {
  console.log("Player 1 wins!");
} else {
  console.log("Player 2 wins!");
}
