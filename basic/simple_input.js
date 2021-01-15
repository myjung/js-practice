function main() {
    process.stdin.resume();
    process.stdin.on('data', buffer => solution(buffer.toString()));

}

function solution(multiLineString) {
    console.log(multiLineString);
}

main();