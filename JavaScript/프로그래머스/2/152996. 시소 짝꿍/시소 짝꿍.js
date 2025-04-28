function solution(weights) {
  let answer = 0;
  const map = new Map();
  const ratios = [1, 2 / 3, 1 / 2, 3 / 2, 3 / 4, 2, 4 / 3];
  weights.sort((a, b) => a - b);

  for (let weight of weights) {
    for (let ratio of ratios) {
      const target = weight * ratio;
      if (map.has(target)) {
        answer += map.get(target);
      }
    }

    map.set(weight, (map.get(weight) || 0) + 1);
  }

  return answer;
}