function solution(k, m, score) {
  let answer = 0;
  let scoreFilter = score.sort((a, b) => b - a);
  let boxCount = parseInt(scoreFilter.length / m);

  for (let i = 0; i < boxCount; i++) {
    let minScore = scoreFilter[(i + 1) * m - 1]; 
    answer += minScore * m; 
  }

  return answer;
}
