const doubleLetters = (word) => {
    const temporaryArray = [];
    for (let i = 0; i < word.length; i++) {
        if(word[i] !== word[i + 1]) {
            temporaryArray.push(word[i]);
        }
    }
    const arrayToString = temporaryArray.join('');
    if(arrayToString === word) {
        return false;
    } else {
        return true;
    }  
};

const output1 = doubleLetters("loop");
console.log(output1);

const output2 = doubleLetters("yummy");
console.log(output2);

const output3 = doubleLetters("orange");
console.log(output3);

const output4 = doubleLetters("munchkin");
console.log(output4);