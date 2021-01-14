// process.stdin.resume();
// console.log('Enter the data to be displayed ');
// process.stdin.on('data', function (data) { process.stdout.write(data) })
// 기본 기능을 이용한 stdin and stdout

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});



const main = function () {
    const strToNumbersArray = function (strNumbers) {
        return strNumbers.trim().split(" ").map(str => parseInt(str))
    }
    // 이 예제는 스트링 형태의 숫자 두개를 입력 받아 합을 반환하는 솔루션이다.
    // ex) "1 9" => "10"
    const solution = function (dataArray) {
        data = strToNumbersArray(dataArray)
        console.log(data[0] + data[1]);
    }

    const rawStrArray = []

    rl.on('line', line => rawStrArray.push(line))
        .on('close', () => solution(rawStrArray[0]));


}

main();