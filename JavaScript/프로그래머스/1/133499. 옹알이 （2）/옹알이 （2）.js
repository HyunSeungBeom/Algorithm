function solution(babbling) {
  var answer = 0;
  var can = ["aya", "ye", "woo", "ma"];

  for (var i = 0; i < babbling.length; i++) {
    var word = babbling[i];
    var valid = true;
    var prevWord = "";

    while (word.length > 0) {
      let matched = false;
      for (var j = 0; j < can.length; j++) {
        if (word.startsWith(can[j]) && can[j] !== prevWord) {
          word = word.slice(can[j].length);
          prevWord = can[j];
          matched = true;
          break;
        }
      }

      if (!matched) {
        valid = false;
        break;
      }
    }

    if (valid) answer++;
  }

  return answer;
}
