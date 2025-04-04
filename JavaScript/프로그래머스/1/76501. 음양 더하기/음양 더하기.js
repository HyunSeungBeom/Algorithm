function solution(absolutes, signs) {
  for (var i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = -absolutes[i];
    }
  }

  return absolutes.reduce((acc, cur) => acc + cur, 0);
}