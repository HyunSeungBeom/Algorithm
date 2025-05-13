function solution(want, number, discount) {
  let answer = 0;
  const wantMap = {};

  want.forEach((item, idx) => {
    wantMap[item] = number[idx];
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    const window = discount.slice(i, i + 10);
    const discountMap = {};

    window.forEach((item) => {
      discountMap[item] = (discountMap[item] || 0) + 1;
    });

    const isMatch = Object.keys(wantMap).every(
      (item) => discountMap[item] === wantMap[item]
    );

    if (isMatch) answer++;
  }

  return answer;
}