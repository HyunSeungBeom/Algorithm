function solution(a, b, n) {
  var answer = 0;

  while (n >= a) {
    let newCoke = Math.floor(n / a) * b;
    answer += newCoke;
    n = newCoke + (n % a);
  }

  return answer;
}
