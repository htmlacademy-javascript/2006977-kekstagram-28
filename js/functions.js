const getLineLength = function (phrase, maxLength) {
  if (phrase.length <= maxLength) {
    return true;
  }
  return false;
};
getLineLength('проверяемая строка', 10);


const checkForPalindrome = function (phrase) {
  const phraseToLowerCase = phrase.toLowerCase().trim();
  for (let i = 0; i < phraseToLowerCase.length; i++) {
    return phraseToLowerCase[i] === phraseToLowerCase[phraseToLowerCase.length - 1 - i];
  }
};
checkForPalindrome('ДовОд');


const getNumbers = function (phrase) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  switch (true) {
    case typeof phrase === 'number' && Number.isInteger(phrase):
      return Math.abs(phrase);
    case typeof phrase === 'number' && !Number.isInteger(phrase):
      result = phrase.toString().replace(/\./g , '');
      return Math.abs(result);
    default:
      for (let i = 0; i < phrase.length; i++) {
        if (numbers.includes(phrase[i])) {
          result = result + phrase[i];
        }
      }
  }
  return parseInt(result, 10);
};
getNumbers('1 кефир, 0.5 батона');


const getStringSpecificLengthWithAddCharacter = function (initial, min, add) {
  let result = add + initial;
  switch (true){
    case initial.length >= min :
      return initial;

    case result.length < min :
      while (result.length < min) {
        result = add.substring(0, min - result.length) + result;
      }
      return result;

    case result.length > min :
      result = add.substring(0, min - initial.length) + initial;
      return result;
    default:
      return result;
  }
};
getStringSpecificLengthWithAddCharacter('1', 4, '0');
