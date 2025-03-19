function solution(numbers) {
  var sum = 45;

  var sumNumbers = numbers.reduce((prev, acc) => {
    return prev + acc;
  }, 0);

  return sum - sumNumbers;
}

