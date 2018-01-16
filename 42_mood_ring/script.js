const randomNumber = Math.floor(Math.random() * 9) + 1;

const moodColor = {
  1: "red",
  2: "orange",
  3: "yellow",
  4: "green",
  5: "blue",
  6: "#4169e1",
  7: "#00008b",
  8: "purple",
  9: "black"
}

document.getElementById("stone").style.backgroundColor = moodColor[randomNumber];
