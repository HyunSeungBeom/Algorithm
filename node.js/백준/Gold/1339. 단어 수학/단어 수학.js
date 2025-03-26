const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]); 
const words = input.slice(1);

function solution(n, words) {
  let alphaScore = {};

  for (let word of words) {
    let length = word.length;
    for (let i = 0; i < length; i++) {
      let pow = length - i - 1;
      let char = word[i];
      alphaScore[char] = (alphaScore[char] || 0) + Math.pow(10, pow);
    }
  }

  let sortedAlpha = Object.entries(alphaScore)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);

  let numMap = {};
  let num = 9;
  for (let char of sortedAlpha) {
    numMap[char] = num--;
  }

  let result = 0;
  for (let word of words) {
    let numStr = "";
    for (let char of word) {
      numStr += numMap[char];
    }
    result += Number(numStr);
  }

  console.log(result);
}

solution(n, words);
