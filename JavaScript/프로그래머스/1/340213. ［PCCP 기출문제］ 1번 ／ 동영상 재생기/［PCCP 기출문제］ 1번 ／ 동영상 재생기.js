function toSecond(time) {
  var min = Number(time.split(":")[0]);
  var sec = Number(time.split(":")[1]);
  return min * 60 + sec;
}

function solution(video_len, pos, op_start, op_end, commands) {
  var video_len_s = toSecond(video_len);
  var pos_s = toSecond(pos);
  var op_start_s = toSecond(op_start);
  var op_end_s = toSecond(op_end);

  if (op_start_s <= pos_s && pos_s <= op_end_s) pos_s = op_end_s;

  commands.forEach((command) => {
    pos_s += command === "next" ? 10 : -10;

    if (pos_s < 0) pos_s = 0;
    if (pos_s >= video_len_s) pos_s = video_len_s;
    if (op_start_s <= pos_s && pos_s <= op_end_s) {
      pos_s = op_end_s;
    }
  });

  var answer_m = parseInt(pos_s / 60).toString();
  var answer_s = (pos_s % 60).toString();

  return `${answer_m.padStart(2, "0")}:${answer_s.padStart(2, "0")}`;
}
