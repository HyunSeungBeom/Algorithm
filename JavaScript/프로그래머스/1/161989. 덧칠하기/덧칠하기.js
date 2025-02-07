function solution(n, m, section) {
  var answer = 0;
  var queue = [...section];
  var i = 1;

  while (queue.length > 0 && i <= n) {
    if (i === queue[0]) {
      for (let j = 0; j < m; j++) {
        if (queue.length > 0 && i + j === queue[0]) {
          queue.shift();
        }
      }
      i += m;
      answer++;
    } else {
      i++;
    }
  }

  return answer;
}