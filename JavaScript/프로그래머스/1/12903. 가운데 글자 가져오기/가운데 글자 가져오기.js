function solution(s) {
  const len = s.length;
  const half = Math.floor(len / 2);

  if (len % 2 === 1) {
    return s[half];
  }

  return s[half - 1] + s[half];
}
