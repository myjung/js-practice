/*
    정규식 생성 후 exec 메소드 사용할 경우 lastindex를 통한 연속적인 활용이 가능하지만 예상치 못한 동작을 할 수 있으므로
    전체 문자열에 대해 사용할 때는 string.matchAll(regexp)-> iterable 사용할 것
    js 승수 연산의 경우 '**'을 이용함
*/
function solution(dartResult) {
    var answer = 0;
    const groupReg = new RegExp(/(?<score>\d{1,2})(?<multiplier>[SDT])(?<bonus>[#\*]?)/,'g');
    const darts = [...dartResult.matchAll(groupReg)].map(m=>m.groups)
    
    const dict = {S:1, D:2, T:3 }
    const result = []
    for (let index=0; index<3; index++){
        result[index] = parseInt(darts[index].score,10)**dict[darts[index].multiplier]
        if(darts[index].bonus == "*"){
            if(index){
                result[index-1]*=2
            }
                result[index]*=2
        }else if(darts[index].bonus == "#"){
            result[index]*=(-1)
        }
    }
    
    return result.reduce((prev,cur)=>prev+cur,0);
}

solution("1D2S#10S");