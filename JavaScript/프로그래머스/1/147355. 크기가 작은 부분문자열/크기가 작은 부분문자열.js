function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let subStr = t.substring(i, i + p.length);
    if (parseInt(subStr) <= parseInt(p)) {
      answer++;
    }
  }

  return answer;
}