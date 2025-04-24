function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);

  let answer = 0;
  let interceptPoint = -Infinity;

  for (let [start, end] of targets) {
    if (start >= interceptPoint) {
      answer++;
      interceptPoint = end;
    }
  }

  return answer;
}