const question = "Is Codédex better than Udemy yet?"

const responses = [
  "Yes - definitely.",
  "It is decidedly so.",
  "Without a doubt.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]

const answer = Math.floor(Math.random()*responses.length)

console.log("Question: " + question)
console.log("Magic 8-Ball says: " + responses[answer])
