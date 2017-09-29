let binaryString = ""
number = 43
while(true) {
  const remainder = number % 2
  binaryString = remainder + binaryString
  number = Math.floor(number / 2)
  if (number === 0) break
}

console.log(binaryString)
