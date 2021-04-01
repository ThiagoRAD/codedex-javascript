const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const quotes = [
  "When you finally understand JavaScript",
  "That feeling when your code works on the first try",
  "Debugging: The art of removing bugs",
  "When you forget a semicolon and everything breaks",
  "Me explaining my code to someone else",
  "When you copy code from Stack Overflow and it works",
  "Trying to fix one bug but creating three more",
  "When the client wants 'just a small change'",
  "Me pretending to understand promises and async/await",
  "When you finally fix that bug you've been working on for hours",
  "Console.log() is my best friend",
  "When you realize you've been debugging for 2 hours and it was just a typo",
  "Explaining why you can't just 'make it look like Google'",
  "When CSS finally does what you want it to do",
  "Me trying to center a div",
  "When someone asks if you can hack into Facebook"
];

const img = document.getElementById("random-meme");
const h2 = document.getElementById("random-caption");
const button = document.getElementById("generator-button");

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * memeArray.length);
  img.src = memeArray[randomIndex];
  
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  h2.textContent = quotes[quoteIndex];
});
