const removeFromArray = function (arr, ...args) {
  const tempArr = [];
  arr.forEach((e) => {
    if (!args.includes(e)) {
      tempArr.push(e);
    }
  });
  return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
