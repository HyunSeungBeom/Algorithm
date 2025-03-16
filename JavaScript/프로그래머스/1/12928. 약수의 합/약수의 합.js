function solution(n) {
  var answer = 0;
  var array = [];

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
    }
  }


  answer = array.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return answer;
}
