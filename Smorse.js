let morse =
  ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..";
let morseArray = morse.split(" ");
smorse("sos");
smorse("daily");
smorse("Programmer");
smorse("bits");
smorse("three");

function smorse(word) {
  var result = "";
  const lowerCaseWord = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    result += morseArray[lowerCaseWord.charCodeAt(i) - 97];
  }
  console.log(`${word} in morse is ${result}`);
}
