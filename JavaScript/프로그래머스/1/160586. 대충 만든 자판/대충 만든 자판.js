function solution(keymap, targets) {
  var answer = [];
  var keyMatching = {};

  for (const k of keymap) {
    for (var i = 0; i < k.length; i++) {
      if (!keyMatching[k[i]] || keyMatching[k[i]] > i + 1) {
        keyMatching[k[i]] = i + 1;
      }
    }
  }

  for (const t of targets) {
    let isPossible = true;
    let count = 0;
    for (var j = 0; j < t.length; j++) {
      if (keyMatching[t[j]]) {
        count += keyMatching[t[j]];
      } else {
        isPossible = false;
        break;
      }
    }
    answer.push(isPossible ? count : -1);
  }

  return answer;
}