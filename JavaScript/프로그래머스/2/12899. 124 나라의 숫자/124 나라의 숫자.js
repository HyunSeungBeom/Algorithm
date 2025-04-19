function solution(n) {
  let answer = "";

  while (n > 0) {
    let remainder = n % 3;

    if (remainder === 0) {
      answer = "4" + answer;
      n = Math.floor(n / 3) - 1;
    } else {
      answer = remainder + answer;
      n = Math.floor(n / 3);
    }
  }

  return answer;
}