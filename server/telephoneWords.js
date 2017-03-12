const checkWord = require('check-word');
const words = checkWord('en');

module.exports = (digitArr, checkEnglish) => {
  const telephoneKeyMap = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  const results = [];

  const recursiveWordBuilder = (currentWord, digits) => {
    if (digits.length === 0) {
      results.push(currentWord);
      return;
    }
    const currentDigit = digits[0];
    const remainingDigits = digits.slice(1);
    const letters = telephoneKeyMap[currentDigit];
    for (let i = 0; i < letters.length; i++) {
      recursiveWordBuilder(currentWord + letters[i], remainingDigits);
    }
  };

  recursiveWordBuilder('', digitArr);

  return checkEnglish ? results.filter(words.check).join(', ') : results.join(', ');
}
