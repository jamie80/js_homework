const repeat = (word, letterRepetition) => {
  const wordLetters = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < letterRepetition; j++) {
      wordLetters.push(word[i]);
    }
  }
  const wordLettersToString = wordLetters.join("");
  return wordLettersToString;
};

const output1 = repeat("mice", 5);
console.log(output1);

const output2 = repeat("hello", 3);
console.log(output2);

const output3 = repeat("stop", 1);
console.log(output3);