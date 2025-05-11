function solution(n, w, num) {
  let boxs = Array.from({ length: w }, () => []);
  let boxNum = 0;
  let direction = 1;

  while (boxNum < n) {
    let indices =
      direction === 1 ? [...Array(w).keys()] : [...Array(w).keys()].reverse();

    for (let idx of indices) {
      boxNum++;
      boxs[idx].push(boxNum);
      if (boxNum === n) break;
    }
    direction *= -1;
  }

  for (let values of boxs) {
    let index = values.indexOf(num);
    if (index !== -1) {
      return values.length - index;
    }
  }

  return 0;
}