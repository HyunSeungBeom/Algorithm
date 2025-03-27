function solution(N, stages) {
  let answer = [];

  let count = new Array(N + 2).fill(0);
  for (let stage of stages) {
    count[stage]++;
  }

  let totalPlayers = stages.length; 

  let failRate = [];

  for (let i = 1; i <= N; i++) {
    if (totalPlayers === 0) {
      failRate.push({ stage: i, rate: 0 });
    } else {
      let rate = count[i] / totalPlayers;
      failRate.push({ stage: i, rate });
      totalPlayers -= count[i]; 
    }
  }

  failRate.sort((a, b) => {
    if (b.rate === a.rate) {
      return a.stage - b.stage; 
    }
    return b.rate - a.rate; 
  });

  answer = failRate.map((item) => item.stage);

  return answer;
}