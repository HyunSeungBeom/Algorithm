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
    direction *= -1; // 방향 전환
  }
  console.log(boxs, 'boxs);
  
  for (let values of boxs) {
    let index = values.indexOf(num);
    if (index !== -1) {
      return values.length - index;
    }
  }

  return 0;
}

// [
//   [ 1, 12, 13 ],
//   [ 2, 11, 14 ],
//   [ 3, 10, 15, 22 ],
//   [ 4, 9, 16, 21 ],
//   [ 5, 8, 17, 20 ],
//   [ 6, 7, 18, 19 ]
// ] boxs
// 3
// [ [ 1, 6, 7, 12, 13 ], [ 2, 5, 8, 11 ], [ 3, 4, 9, 10 ] ] boxs
// 4
