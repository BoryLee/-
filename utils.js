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
 * 会造成内存泄漏
 * @param {*} n
 * @returns
 */
function ES5_factorial(n) {
  if (n === 1) return 1;
  return n * ES5_factorial(n - 1);
}

console.log(ES5_factorial(10));
/**
 * 尾递归 n 的阶乘
 * @param {*} n
 * @param {*} total
 */
function ES6_factorial(n, total = 1) {
  if (n === 1) return total;
  return ES6_factorial(n - 1, n * total);
}
console.log(ES6_factorial(10));

/**
 * 非尾递归的 Fibonacci 数列
 * 会造成内存泄漏
 * @param {*} n
 */
function Fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
/**
 * 尾递归优化过的 Fibonacci 数列
 * @param {*} n
 * @param {*} ac1
 * @param {*} ac2
 */
function Fibonacci2(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    return ac2;
  }
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}

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

/**
 * 去除一个数的小数部分，返回整数部分
 * @param {*} x
 */
function decimation(x) {
  Math.trunc =
    Math.trunc ||
    function(x) {
      return x < 0 ? Math.ceil(x) : Math.floor(x);
    };

  return Math.trunc(x);
}

console.log(decimation(9.6));

/**
 * 判断一个数到底是正数、负数、还是零
 * @param {*} num
 */
function judgeIsNumber(num) {
  Math.sign =
    Math.sign ||
    function(num) {
      num = +num;
      if (num === 0 || isNaN(num)) {
        return num;
      }
      return num > 0 ? 1 : -1;
    };
  return Math.sign(num);
}
console.log(judgeIsNumber("123abc"));

/**
 * 将类似数组转为数组
 * @param {*} obj
 */
function likeArrayConvertToArray(obj) {
  if (Array.from) {
    return Array.from(obj);
  }
  return [].slice.call(obj);
}

/**
 * 统计字符串出现的次数
 *
 * @param {*} value
 */
function staticCountInString(value) {
  const array = value.split("");
  let obj = array.reduce((a, b) => {
    return a[b]++ || (a[b] = 1), a;
  }, {});
  return obj;
}
console.log(staticCountInString("aaaaabbbbcccdddeeefoaklasaslals"));
