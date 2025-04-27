function solution(n) {
  const targetOneCount = n.toString(2).split("1").length - 1;

  while (true) {
    n++; 
    const currentOneCount = n.toString(2).split("1").length - 1;
    if (currentOneCount === targetOneCount) {
      return n;
    }
  }
}