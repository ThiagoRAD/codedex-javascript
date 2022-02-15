const luckyNumber = 7

while (true) {
  let guess = Math.floor(Math.random() * 10) + 1;
  console.log("Your guess: " + guess)
  if (guess === luckyNumber) {
    console.log("Congratulations! You guessed the lucky number!");
    break;
  }
}
