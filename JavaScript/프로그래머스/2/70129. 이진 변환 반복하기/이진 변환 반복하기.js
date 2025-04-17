function solution(s) {
  let count = 0;
  let removedZero = 0;

  while (s !== "1") {
    let beforeLength = s.length;
    s = s.replace(/0/g, "");
    removedZero += beforeLength - s.length;

    s = s.length.toString(2); 
    count++;
  }

  return [count, removedZero];
}