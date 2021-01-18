function bubbleSort(param_array) {
    const new_array = [...param_array]
    let last = param_array.length;
    let temp = 0
    while (last > 0) {
        for (let i = 0; i + 1 < last; i++) {
            if (new_array[i] > new_array[i + 1]) {
                temp = new_array[i + 1];
                new_array[i + 1] = new_array[i];
                new_array[i] = temp;
            } else {
                continue;
            }
        }
        last--;
    }
    return new_array;
}

function findPivot(array) {
    const first = array[0];
    const last_index = array.length - 1 || 0;
    const mid_index = parseInt(last_index / 2, 10);
    const last = array[last_index];
    const mid = array[mid_index];
    return [first, mid, last].sort((a, b) => a - b)[1]
}
function quickSort(param_array) {
    // console.log("호출됨")
    const input_array = param_array // const input_array = [...param_array] 복사할 필요는 없음
    if (input_array.length < 2) {
        // console.log("마지막 도달", "input_array", input_array)
        return input_array;
    } else {
        const pivot = input_array[0];
        const less = input_array.slice(1).filter(elem => elem <= pivot);
        const greater = input_array.slice(1).filter(elem => elem > pivot);
        // console.log("실행됨", "less", less, "pivot", pivot, "greater", greater);
        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}
const timeCheck = (func, ...rest) => {
    let time = new Date();
    func(...rest);
    let end = new Date();
    console.log(`${func.name}는 실행에 ${typeof rest}를 전달받아 ${end - time}밀리초 걸렸습니다.`)
}

const testCase1 = [6, 1, 8, 10, 9, 15, 176, 30, 3, 5, 7, 2, 9, 10, 15, 19];

const randomTestGenerator = n => {
    return [...Array(n).keys()].map(() => Math.round(Math.random() * n))
}

const testJsSort = (array) => {
    return [...array].sort((a, b) => a - b);
}

timeCheck(quickSort, testCase1);
timeCheck(testJsSort, testCase1);
timeCheck(bubbleSort, testCase1);
const checker = randomTestGenerator(100);
console.log(checker);
const br = bubbleSort(checker);
console.log(br);
console.log('-'.repeat(50))
console.log(checker);
const qr = quickSort(checker);
console.log(qr);
console.log('-'.repeat(50))
console.log(checker);
const jr = testJsSort(checker);
console.log(jr);


const testCase2 = randomTestGenerator(1000000);
console.log('-'.repeat(50))
console.log(`testCase2 시작 -- 원소의 개수는 ${testCase2.length}입니다.`)
timeCheck(quickSort, testCase2);
timeCheck(testJsSort, testCase2);
// timeCheck(bubbleSort, testCase2); //10000개 이상은 비권장

