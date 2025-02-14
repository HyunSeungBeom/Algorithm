function solution(today, terms, privacies) {
  const answer = [];

  const expire = new Date(today);

  const termType = {};
  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termType[type] = Number(term);
  });

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");
    const chDate = new Date(date);

    chDate.setMonth(chDate.getMonth() + termType[type]);

    expire.setHours(0, 0, 0, 0);
    chDate.setHours(0, 0, 0, 0);

    if (chDate <= expire) {
      answer.push(idx + 1);
    }
  });

  return answer;
}