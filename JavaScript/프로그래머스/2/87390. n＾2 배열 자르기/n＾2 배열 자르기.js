function solution(n, left, right) {
    var answer = [];
    
    for(let i = left; i <= right; i++) {
        const row = parseInt(i / n);
        const col = i % n;
        answer.push(Math.max(row, col) + 1);
    }
    
    return answer;
}