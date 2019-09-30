//https://www.reddit.com/r/dailyprogrammer/comments/cmd1hb/20190805_challenge_380_easy_smooshed_morse_code_1/

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
