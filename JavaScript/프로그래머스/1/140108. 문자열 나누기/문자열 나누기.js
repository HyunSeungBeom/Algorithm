function solution(s) {
  let answer = 0;
  let firstChar = "";
  let sameCount = 0;
  let diffCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (sameCount === 0 && diffCount === 0) {
      firstChar = s[i];
    }

    if (s[i] === firstChar) {
      sameCount++;
    } else {
      diffCount++;
    }

    if (sameCount === diffCount) {
      answer++;
      sameCount = 0;
      diffCount = 0;
    }
  }

  if (sameCount !== 0 || diffCount !== 0) {
    answer++;
  }

  return answer;
}