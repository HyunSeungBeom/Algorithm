function solution(s, skip, index) {
  var answer = "";
  var match = [..."abcdefghijklmnopqrstuvwxyz"].filter(
    (value) => !skip.includes(value)
  );

  for (const alpha of s) {
    const alphaIndex = match.indexOf(alpha);
    const newValue = match[(alphaIndex + index) % match.length];
    answer += newValue;
  }

  return answer;
}