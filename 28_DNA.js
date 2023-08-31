const dnaPieces = ["A", "C", "G", "T"];

const getRandomDNAPiece = () => {
  const randomIndex = Math.floor(Math.random() * dnaPieces.length);
  return dnaPieces[randomIndex];
}

const myDNA = [];

for(let i = 0; i < 24; i++) {
  let piece = ''
  for(let j = 0; j < 3; j++) {
    piece += getRandomDNAPiece();
  }
  myDNA.push(piece);
}

console.log(myDNA);
