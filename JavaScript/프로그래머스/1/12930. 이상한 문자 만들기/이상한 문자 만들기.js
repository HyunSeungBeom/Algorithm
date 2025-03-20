function solution(s) {
  var answer = "";
  var sArray = s.split(" ");

  for (var i = 0; i < sArray.length; i++) {
    var word = sArray[i].split("");
    for (var j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        word[j] = word[j].toUpperCase();
      } else {
        word[j] = word[j].toLowerCase();
      }
    }
    sArray[i] = word.join("");
  }

  answer = sArray.join(" ");
  return answer;
}
