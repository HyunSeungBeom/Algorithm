function solution(new_id) {
  // 1단계: 대문자를 소문자로 변경
  new_id = new_id.toLowerCase();

  // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 문자 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

  // 3단계: 연속된 마침표(.)를 하나의 마침표로 치환
  new_id = new_id.replace(/\.{2,}/g, ".");

  // 4단계: 처음이나 끝에 있는 마침표 제거
  new_id = new_id.replace(/^\.|\.$/g, "");

  // 5단계: 빈 문자열이면 "a"를 대입
  if (new_id === "") {
    new_id = "a";
  }

  // 6단계: 길이가 16자 이상이면, 첫 15자만 남기고 끝에 마침표가 있으면 제거
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/, ""); 
  }

  // 7단계: 길이가 2자 이하라면 마지막 문자를 반복해서 3자 길이를 맞추기
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }

  return new_id;
}