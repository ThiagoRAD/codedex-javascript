const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

const mean = (list) => {
  const total = list.reduce((acc, val) => acc + val, 0);
  return total / list.length;
}

const median = (list) => {
  const sortedList = [...list].sort((a, b) => a - b);
  const midIndex = Math.floor(sortedList.length / 2);
  if (sortedList.length % 2 === 0) {
    return (sortedList[midIndex - 1] + sortedList[midIndex]) / 2;
  } else {
    return sortedList[midIndex];
  }
}

console.log("\nTiktok")
console.log("Mean:", mean(recentTikTokViews));
console.log("Median:", median(recentTikTokViews));

console.log("\nInstagram")
console.log("Mean:", mean(recentInstagramViews));
console.log("Median:", median(recentInstagramViews));

console.log("\nYouTube")
console.log("Mean:", mean(recentYouTubeViews));
console.log("Median:", median(recentYouTubeViews));

