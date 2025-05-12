function solution(diffs, times, limit) {
  let left = 1;
  let right = 100000;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canSolve(diffs, times, limit, mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    } 
  }

  return answer;
}

function canSolve(diffs, times, limit, level) {
  let total = 0;

  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] <= level) {
      total += times[i];
    } else {
      const retry = diffs[i] - level;
      total += retry * (times[i] + times[i - 1]) + times[i];
    }

    if (total > limit) {
      return false; 
    }
  }

  return true;
}
