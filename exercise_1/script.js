function hackerSpeak(message) {
  let arrayMessage = [];
  for (let i = 0; i < message.length; i++) {
    if (message[i] == "a") {
      arrayMessage.push("4");
    } else if (message[i] == "e") {
      arrayMessage.push("3");
    } else if (message[i] == "i") {
      arrayMessage.push("1");
    } else if (message[i] == "o") {
      arrayMessage.push("0");
    } else if (message[i] == "s") {
      arrayMessage.push("5");
    } else {
      arrayMessage.push(message[i]);
    }
  }
  const stringMessage = arrayMessage.join('');
  return stringMessage;
}

const codedInformation1 = hackerSpeak("javascript is cool");
console.log(codedInformation1);

const codedInformation2 = hackerSpeak("programming is fun");
console.log(codedInformation2);

const codedInformation3 = hackerSpeak("becoma a coder");
console.log(codedInformation3);