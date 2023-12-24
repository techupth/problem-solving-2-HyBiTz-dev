//Exercise 1: Roman to Integer

const romanNumber = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const romanToInt = function (value) {
  //Start coding here
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    if (romanNumber[value[i]] < romanNumber[value[i + 1]]) {
      result += romanNumber[value[i + 1]] - romanNumber[value[i]];
      i++;
    } else {
      result += romanNumber[value[i]];
    }
  }
  return result;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1);
console.log(result2);
console.log(result3);
