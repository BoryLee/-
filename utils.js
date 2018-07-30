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

/**
 *  n 的阶乘
 * @param {*} n
 * @returns
 */
function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : n;
}
console.log(factorial(10));

/**
 *   彻底冻结对象 即对象不可修改
 * @param {*} obj
 */
function constantize(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === "object") {
      Object.freeze(obj[key]);
    }
  });
}
