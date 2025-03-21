function solution(array, commands) {
  var answer = [];

  for (var i = 0; i < commands.length; i++) {
    let start = commands[i][0];
    let end = commands[i][1];
    let commandsIndex = commands[i][2];

    let findArray = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(findArray[commandsIndex - 1]);
  }

  return answer;
}