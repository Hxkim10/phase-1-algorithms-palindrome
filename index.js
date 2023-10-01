function isPalindrome(word) {
  const mid = Math.floor(word.length / 2);
  const length = word.length - 1;
  for (let i = 0; i < mid; i++) {
    let j = length - i;
    if (word.charAt(i) !== word.charAt(j)) {
      return false;
    }
  }
  return true;
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("maddam"));
}

module.exports = isPalindrome;