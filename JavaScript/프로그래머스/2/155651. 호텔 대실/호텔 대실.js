function solution(book_time) {
  const toMinutes = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const times = book_time.map(([start, end]) => [
    toMinutes(start),
    toMinutes(end) + 10,
  ]);

  times.sort((a, b) => a[0] - b[0]);

  const rooms = []; 

  for (let [start, end] of times) {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= start) {
        rooms.splice(i, 1); 
        break;
      }
    }

    rooms.push(end); 
  }

  return rooms.length; 
}
