function solution(k, score) {
  var answer = [];
  var stack = [];

  for (var i = 0; i < score.length; i++) {
    stack.push(score[i]);
    stack.sort((a, b) => b - a);
    
    if (stack.length > k) {
      stack.pop();
    }

    answer.push(stack[stack.length - 1]);
  }

  return answer;
}