function solution(survey, choices) {
  let answer = "";
  let scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    let [first, second] = survey[i].split("");
    let choice = choices[i];

    if (choice < 4) {
      scores[first] += 4 - choice;
    } else if (choice > 4) {
      scores[second] += choice - 4;
    }
  }

  answer += scores["R"] >= scores["T"] ? "R" : "T";
  answer += scores["C"] >= scores["F"] ? "C" : "F";
  answer += scores["J"] >= scores["M"] ? "J" : "M";
  answer += scores["A"] >= scores["N"] ? "A" : "N";

  return answer;
}