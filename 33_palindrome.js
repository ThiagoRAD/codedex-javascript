function isPalindrome(str) {
  const cleanedStr = str.toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("moonlight"));
console.log(isPalindrome("aviary"));
