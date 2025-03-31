function solution(sequence, k) {
  var left = 0;
  var right = 0;
  var sum = sequence[0];
  var answer = [-1, -1];
  var minLength = Infinity;

  while (right < sequence.length) {
    if (sum === k) {
      if (right - left < minLength) {
        minLength = right - left;
        answer = [left, right];
      }
    }

    if (sum >= k) {
      sum -= sequence[left];
      left++;
    } else {
      right++;
      if (right < sequence.length) {
        sum += sequence[right];
      }
    }
  }
  return answer;
}
