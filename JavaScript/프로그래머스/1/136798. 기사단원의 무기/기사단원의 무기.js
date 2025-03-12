function solution(number, limit, power) {
  var array = [];

  for (var i = 1; i <= number; i++) {
    var divisorCount = 0;

    for (var j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        divisorCount++;
        if (j !== i / j) divisorCount++;
      }
    }

    array.push(divisorCount);
  }

  for (var j = 0; j < array.length; j++) {
    if (array[j] > limit) {
      array[j] = power;
    }
  }

  return array.reduce((prev, cur) => prev + cur, 0);
}