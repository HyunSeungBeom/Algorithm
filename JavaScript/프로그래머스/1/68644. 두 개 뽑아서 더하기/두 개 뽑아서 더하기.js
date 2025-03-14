function solution(numbers) {
  var answer = new Set();

  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return [...answer].sort((a, b) => a - b);
}