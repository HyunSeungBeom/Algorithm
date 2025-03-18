function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([w, h]) => {
    if (w < h) [w, h] = [h, w];

    maxWidth = Math.max(maxWidth, w);
    maxHeight = Math.max(maxHeight, h);
  });

  return maxWidth * maxHeight;
}
