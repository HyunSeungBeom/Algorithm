function solution(n, m) {
  var answer = [];
  var nMeasure = [];
  var mMeasure = [];

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      nMeasure.push(i);
    }
  }

  for (var j = 1; j <= m; j++) {
    if (m % j === 0) {
      mMeasure.push(j);
    }
  }

  var commonMeasure = nMeasure.filter((value) => mMeasure.includes(value));
  var gcd = Math.max(...commonMeasure);
  var lcm = (n * m) / gcd;

  answer.push(gcd, lcm);
 
  return answer;
}