function solution(lottos, win_nums) {
  var answer = [];
  var match = { 0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };
  var count = 0;
  var noCaculate = 0;

  var sortLottos = lottos.sort((a, b) => a - b);
  var WinLottos = win_nums.sort((a, b) => a - b);

  for (var i = 0; i < sortLottos.length; i++) {
    for (var j = 0; j < WinLottos.length; j++) {
      if (sortLottos[i] === WinLottos[j]) {
        count++;
      }
    }
    if (sortLottos[i] === 0) {
      noCaculate++;
    }
  }

  answer.push(match[count], match[count + noCaculate]);
  return answer.sort((a, b) => a - b);
}
