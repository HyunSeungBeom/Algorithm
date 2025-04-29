function solution(s) {
  var stack = [];

  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      stack.push(")");
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length == 0;
}