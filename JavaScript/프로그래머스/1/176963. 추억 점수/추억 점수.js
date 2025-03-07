function solution(name, yearning, photo) {
    var answer = [];

    photo.forEach((element) => {
        var duplicates = element.filter(value => name.includes(value));

        var sum = duplicates.reduce((value, index) => value + yearning[name.indexOf(index)], 0);
        answer.push(sum);

    });

    return answer;
}