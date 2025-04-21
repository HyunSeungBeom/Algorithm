function solution(plans) {
  var answer = [];
  var stack = [];
  const row = plans.length;

  for (var i = 0; i < row; i++) {
    const min = toMintues(plans[i][1]);
    plans[i][1] = min;
    plans[i][2] = parseInt(plans[i][2]);
  }

  plans.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < plans.length - 1; i++) {
    const [name, start, duration] = plans[i];
    const nextStart = plans[i + 1][1];
    let timeLeft = nextStart - start;

    if (timeLeft >= duration) {
      answer.push(name);
      timeLeft -= duration;

      while (timeLeft > 0 && stack.length > 0) {
        const [prevName, prevTime] = stack.pop();
        if (timeLeft >= prevTime) {
          answer.push(prevName);
          timeLeft -= prevTime;
        } else {
          stack.push([prevName, prevTime - timeLeft]);
          break;
        }
      }
    } else {
      stack.push([name, duration - timeLeft]);
    }
  }

  answer.push(plans[plans.length - 1][0]);

  while (stack.length > 0) {
    answer.push(stack.pop()[0]);
  }

  return answer;
}

function toMintues(time) {
  return parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
}
