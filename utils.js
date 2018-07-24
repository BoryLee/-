/**
 * 数组去重
 * @param {*} array
 */

function ES5RemoveSameItemInArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] === array[j]) {
        array.splice(i, 1);
      }
    }
  }

  return array;
}

function ES6RemoveSameItemInArray(array) {
  return [...new Set(array)];
}

console.log(ES6RemoveSameItemInArray([1, 2, 3, 4, 1, 3, 7]));
