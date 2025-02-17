function solution(wallpaper) {
  var answer = [];
  var row = wallpaper[0].length;
  var col = wallpaper.length;

  var top = col;
  var left = row;
  var bottom = -1;
  var right = -1;

  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      if (wallpaper[i][j] === "#") {
        top = Math.min(top, i);
        bottom = Math.max(bottom, i);
        left = Math.min(left, j);
        right = Math.max(right, j);
      }
    }
  }

  answer = [top, left, bottom + 1, right + 1];
  return answer;
}