/*
Array.prototype.reduce(callback,initialValue);
callback 함수의 경우 initialValue가 있느냐 없느냐에 따라 호출 방식이 조금 바뀜
callback은 호출 시 callback(accumulator, currentValue, [index]){return accumulator}; 형식
초기값이 없을 경우 index는 1부터 시작하며 accumulator로 index 0번이 주어짐
return 되는 값이 다음 index의 accumulator가 되는 점화식 형태로
return이 없을 경우 undefined가 다음 호출 시 accumulator로 전달됨
초기 값은 모든 object가 될 수 있음 단 빈 배열에 초기 값 없이 호출할 경우 오류 발생
*/
const developer = [
    { name: 'Jeff', language: 'php', },
    { name: 'Ashley', language: 'python', },
    { name: 'Sara', language: 'python', },
    { name: 'Paul', language: 'cpp', },
    { name: 'Joe', language: 'javascript', },
    { name: 'July', language: 'javascript', },
    { name: 'Mike', language: 'javascript', },
    { name: 'Terry', language: 'Go', },
];


const developerLanguageCounter = developer.reduce((accum, current,id) => {
    // console.log(`accum:${accum} accum[current.language]: ${accum[current.language]}`);
    //console.log(`${typeof accum} typeof accum ${accum.get(current.language)}`)
    const key = current.language;
    if (accum[key] === undefined) {
        accum[key] = 1;
    } else {
        accum[key] += 1;
    }
    return accum
}, {});
console.log(developerLanguageCounter);

const developerLanguageCounterMap = developer.reduce((accum, current,id) => {
    // console.log(`accum:${accum} accum[current.language]: ${accum[current.language]}`);
    // console.log(`${typeof accum} typeof accum ${accum.get(current.language)}`)
    const key = current.language;
    if (accum.get(key) === undefined) {
        accum.set(key, 1);
    } else {
        accum.set(key, accum.get(key) + 1);
    }
    return accum
}, new Map());
console.log(developerLanguageCounterMap);