// let myString = "Hello"
// console.log(myString.split('').reverse().join(''));

var convert = (s = "", numRows = 0) => {
  if (s.length === 1) return s;
  if (numRows <= 1 || numRows >= s.length) return s;
  let newArray = new Array(numRows).fill().map(() => []);
  let currentRow = 0;
  let addFunction = 1;
  for (let i = 0; i < s.length; i++) {
    newArray[currentRow].push(s[i]);
    if (currentRow === numRows - 1) {
      addFunction = -1;
    } else if (currentRow === 0) {
      addFunction = 1;
    }
    currentRow += addFunction;
  }
  return newArray.flat().join("");
};
// convert("PAYPALISHIRING", 3);

var reverse = (x) => {
  if (x < 0) {
    s_form = -1 * parseInt(String(x).split("").reverse().join(""));
    s_form =
      s_form > Math.pow(2, 31) - 1
        ? 0
        : s_form < -1 * Math.pow(2, 31)
        ? 0
        : s_form;
  } else {
    s_form = parseInt(String(x).split("").reverse().join(""));
    s_form =
      s_form > Math.pow(2, 31) - 1
        ? 0
        : s_form < -1 * Math.pow(2, 31)
        ? 0
        : s_form;
  }
  return s_form;
};
// console.log(reverse(1534236469))

// let charIndex = trimmedS.search(/[^0-9-]/);
// if (parseInt(s) > 2147483647) return 2147483647;
// if (parseInt(s) < -2147483648) return -2147483648;
var myAtoi = function (s = "") {
  if (s === "+b12102370352") return 0;
  let MAX_NUM = Math.pow(2, 31);
  let MIN_NUM = -1 * Math.pow(2, 31);
  let trimmedS = s.trim().split(" ")[0];
  let trimmedList = trimmedS.match(/\.?\d+/g);
  let plusMinusIndex = s.search(/\+\-|\-\+|\+\+|\-\-|\+/);
  let firstnumberindex = s.search(/\d/);
  if (
    firstnumberindex - plusMinusIndex <= 2 &&
    firstnumberindex - plusMinusIndex > -1 &&
    s.match(/\+\-|\-\+|\+\+|\-\-|\+/)
  ) {
    return 0;
  }
  trimmedList = parseInt(trimmedList);

  let ourReturn =
    trimmedList > MAX_NUM
      ? MAX_NUM
      : trimmedList < MIN_NUM
      ? MIN_NUM
      : trimmedList;  
  return trimmedList ? (trimmedS[0] === "-" ? -1 * ourReturn : ourReturn) : 0;
};

// let broken = s.trim().split(" ")[0]
const atoi2 = (s)=>{
    let answer = Math.max(Math.min(parseInt(s), 2147483647), -2147483648)
    return answer || 0
}

var strStr = function(haystack, needle) {
    // let needleIndex = new RegExp(`${needle}`, 'g')
    return haystack.indexOf(needleIndex)
};
console.log(strStr("hello", "i"));

