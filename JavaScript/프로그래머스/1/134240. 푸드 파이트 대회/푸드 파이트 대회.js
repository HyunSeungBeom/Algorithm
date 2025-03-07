function solution(food) {
  var left = "";
  var right = "";

  for (var i = 1; i < food.length; i++) {
    if (food[i] % 2 === 1) {
      food[i] -= 1;
    }

    let repeatCount = food[i] / 2;
    left = left + String(i).repeat(repeatCount);
    right = String(i).repeat(repeatCount) + right;
  }

  return left + "0" + right;
}