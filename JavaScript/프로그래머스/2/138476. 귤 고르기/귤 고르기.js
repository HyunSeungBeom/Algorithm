function solution(k, tangerine) {
  let countMap = {};

  tangerine.forEach((item) => (countMap[item] = (countMap[item] || 0) + 1));
  const sortedCounts = Object.values(countMap).sort((a, b) => b - a);
  let total = 0;
  let kind = 0;

  for (let count of sortedCounts) {
    total += count;
    kind++;
    if (total >= k) break;
  }

  return kind;
}
