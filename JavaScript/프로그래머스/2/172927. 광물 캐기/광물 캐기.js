function solution(picks, minerals) {
  let answer = 0;

  const maxMineCount = picks.reduce((a, b) => a + b, 0) * 5;
  const limitedMinerals = minerals.slice(0, maxMineCount);

  let groups = [];
  for (let i = 0; i < limitedMinerals.length; i += 5) {
    let part = limitedMinerals.slice(i, i + 5);
    let fatigue = [0, 0, 0];

    for (let m of part) {
      if (m === "diamond") {
        fatigue[0] += 1;
        fatigue[1] += 5;
        fatigue[2] += 25;
      } else if (m === "iron") {
        fatigue[0] += 1;
        fatigue[1] += 1;
        fatigue[2] += 5;
      } else {
        fatigue[0] += 1;
        fatigue[1] += 1;
        fatigue[2] += 1;
      }
    }

    groups.push(fatigue);
  }

  groups.sort((a, b) => b[2] - a[2]);

  for (let i = 0; i < 3; i++) {
    while (picks[i] > 0 && groups.length > 0) {
      let [dia, iron, stone] = groups.shift();
      if (i === 0) answer += dia;
      if (i === 1) answer += iron;
      if (i === 2) answer += stone;
      picks[i]--;
    }
  }

  return answer;
}