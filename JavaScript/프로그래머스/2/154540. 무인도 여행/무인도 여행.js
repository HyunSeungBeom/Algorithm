function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;
  const visited = Array.from({ length: row }, () => Array(col).fill(false));
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const result = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        let sum = 0;
        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length > 0) {
          const [x, y] = queue.shift();
          sum += parseInt(maps[x][y]);

          for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];

            if (
              nx >= 0 &&
              nx < row &&
              ny >= 0 &&
              ny < col &&
              !visited[nx][ny] &&
              maps[nx][ny] !== "X"
            ) {
              queue.push([nx, ny]);
              visited[nx][ny] = true;
            }
          }
        }

        result.push(sum);
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}