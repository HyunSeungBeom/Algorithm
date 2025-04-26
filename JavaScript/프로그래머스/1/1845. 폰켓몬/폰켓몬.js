function solution(nums) {
  const half = nums.length / 2;
  const set = new Set(nums);

  if (set.size <= half) {
    return set.size;
  } else {
    return half;
  }
}
