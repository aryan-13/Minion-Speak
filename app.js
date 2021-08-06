// INPUT FIELD TEXT STORED
var inputText = document.querySelector('#txt-input');
var fURL = 0;
// MINION URL
var sURL = 'https://api.funtranslations.com/translate/minion.json';
//FOR TEXTING
var sURL1 = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
// BUTTON SELECTOR
var button = document.querySelector('#btn-1').addEventListener('click', () => {
  fURL = sURL;
  pressed();
});
// THE OUTPUT DIV
var output = document.querySelector('#output');
//ERROR HANDLER
function errorHandler(err) {
  console.log(err, 'There was an error!');
}
// FETCH-UPDATE OP
function pressed() {
  // console.log('btn clicked', inputText.value);
  var url = fURL + '?text=' + inputText.value;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      output.innerHTML = res.contents.translated;
    })
    .catch(errorHandler);
}
