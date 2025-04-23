function solution(a, b) {
  return (new Date("2016-" + a + "-" + b) + "").split(" ")[0].toUpperCase();
}
