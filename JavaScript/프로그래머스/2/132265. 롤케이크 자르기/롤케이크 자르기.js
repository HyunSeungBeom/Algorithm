function solution(topping) {
  const left = new Map();
  const right = new Map();

  for (const item of topping) {
    right.set(item, (right.get(item) || 0) + 1);
  }

  let answer = 0;

  for (let i = 0; i < topping.length; i++) {
    const item = topping[i];

    left.set(item, (left.get(item) || 0) + 1);

    right.set(item, right.get(item) - 1);
    if (right.get(item) === 0) right.delete(item);

    if (left.size === right.size) answer++;
  }

  return answer;
}