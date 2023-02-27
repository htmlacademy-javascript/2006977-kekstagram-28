const getLineLength = function (phrase, i) {
  if (phrase.length <= i) {
    return true;
  } else {
    return false;
  }
};

const checkPalindrom = function (phrase) {
  const string = phrase.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
};

const getNumbers = function (phrase) {
  const numbers = '0123456789';
  let result = '';
  for (let i = 0; i < phrase.length; i++) {
    if (numbers.includes(phrase[i])) {
      result = result + phrase[i];
    }
  }
  return parseFloat(result);
};

const stickStrings = function (initial, min, add) {
  let result = add + initial;
  if (result.length === min) {
    return result;
  }
  if (result.length < min) {
    while (result.length < min) {
      result = add.substring(0, min - result.length) + result;
    }
    if (result.length === min) {
      return result;
    }
  }
  if (result.length > min) {
    result = add.substring(0, min - initial.length) + initial;
    return result;
  }
};
