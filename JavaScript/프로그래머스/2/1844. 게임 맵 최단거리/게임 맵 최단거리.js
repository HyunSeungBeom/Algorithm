function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const queue = [[0, 0]];
  const visited = Array.from({ length: row }, () => Array(col).fill(0));

  visited[0][0] = 1;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < row &&
        ny < col &&
        maps[nx][ny] === 1 &&
        visited[nx][ny] === 0
      ) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  const result = visited[row - 1][col - 1];
  return result === 0 ? -1 : result;
}