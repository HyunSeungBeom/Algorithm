//banana

function solution(s) {
    var answer = [];
    var lastIndex = {};
    
    for(var i = 0; i < s.length; i++) {
        var char = s[i];
        
        if(lastIndex[char] !== undefined) {
            answer.push(i- lastIndex[char]);
        } else {
            answer.push(-1)
        }
        lastIndex[char] = i;
    }
    
    return answer;
}