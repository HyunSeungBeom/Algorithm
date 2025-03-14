function solution(X, Y) {
  var array = [];
  let countX = {};
  let countY = {};

  for (let num of X) {
    countX[num] = (countX[num] || 0) + 1;
  }

  for (let num of Y) {
    countY[num] = (countY[num] || 0) + 1;
  }

  for (let key in countX) {
    if (countY[key]) {
      let minCount = Math.min(countX[key], countY[key]);
      for (let i = 0; i < minCount; i++) {
        array.push(key);
      }
    }
  }

  var answer = array.sort((a, b) => b - a).reduce((acc, cur) => acc + cur, "");

  if (answer === "") return "-1";
  if (/^0+$/.test(answer)) return "0";

  return answer;
}
