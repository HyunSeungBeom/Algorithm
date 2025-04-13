function solution(elements) {
  const set = new Set();
  const len = elements.length;
  const extended = elements.concat(elements); //*

  for (let subLen = 0; subLen < len; subLen++) {
    for (let start = 0; start < len; start++) {
      const subArr = extended.slice(start, start + subLen);
      const sum = subArr.reduce((acc, cur) => acc + cur, 0);
      set.add(sum);
    }
  }

  return set.size;
}