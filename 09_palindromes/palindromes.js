const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const length = processedString.length;

  for (let i = 0; i < length / 2; i++) {
    if (processedString[i] !== processedString[length - 1 - i]) return false;
  }

  return true;

  // return processedString.split("").reverse().join("") === processedString;
};

// Do not edit below this line
module.exports = palindromes;
