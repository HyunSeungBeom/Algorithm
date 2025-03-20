function solution(n, lost, reserve) {
  var Rlost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  var Rreserve = reserve
    .filter((student) => !lost.includes(student))
    .sort((a, b) => a - b);

  for (let i = 0; i < Rreserve.length; i++) {
    if (Rlost.includes(Rreserve[i] - 1)) {
      Rlost.splice(Rlost.indexOf(Rreserve[i] - 1), 1);
    } else if (Rlost.includes(Rreserve[i] + 1)) {
      Rlost.splice(Rlost.indexOf(Rreserve[i] + 1), 1);
    }
  }

  return n - Rlost.length;
}
