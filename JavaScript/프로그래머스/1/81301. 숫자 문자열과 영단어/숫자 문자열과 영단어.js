function solution(s) {
  let answer = "";
  let temp = "";
  const match = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let char of s) {
    if (!isNaN(char)) {
      answer += char;
    } else {
      temp += char;
      if (match[temp] !== undefined) {
        answer += match[temp];
        temp = "";
      }
    }
  }

  return Number(answer);
}