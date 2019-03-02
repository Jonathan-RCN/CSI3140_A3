

function printLatinWord(tokenArray, phrase) {
  var englishWord;
  var pigLatinWord = "";
  var englishWordParsed;
  var pigLatinPhrase = "";
  var temp;
  var output = document.getElementById("pigLPhrases");

  for (i = 0; i < tokenArray.length; i++) {
    pigLatinWord = "";
    englishWord = tokenArray[i];
    englishWordParsed = englishWord.split("");
    temp = englishWordParsed[0];
    englishWordParsed[0] = englishWordParsed[englishWordParsed.length - 1]
    englishWordParsed[englishWordParsed.length - 1] = temp;
    englishWordParsed.push('a');
    englishWordParsed.push('y');

    for (j = 0; j < englishWordParsed.length; j++) {
      pigLatinWord += englishWordParsed[j];
    }
    pigLatinPhrase += pigLatinWord + " ";
  }

  output.innerHTML += phrase + "  ---->  " + pigLatinPhrase +'\n';

}

function main() {

  var phrase = document.getElementById("englishPhrase").value;
  var splitPhrase = phrase.split(" ");
  printLatinWord(splitPhrase, phrase);
}


function eventL() {
  document.getElementById("translate").addEventListener("click", function (){main()},false)
  document.getElementById("reset").addEventListener("click", function () {document.getElementById("pigLPhrases").innerHTML="";}, false);


  window.addEventListener("keyup", function (event) {

    if (event.keyCode===13) {
      main()
    }
  }, false);
  document.getElementById("englishPhrase").addEventListener("keyup", function (event) {

    if (event.keyCode===13) {
      main()
    }
  }, false);
}


