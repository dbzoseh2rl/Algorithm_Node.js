// 동기식 처리 (백준 제출)
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = require('fs')
//     .readFileSync('input.txt')
//     .toString()
//     .trim()
//     .split('\r\n');

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++){
    console.log("*".repeat(i));
}

// 비동기식 (내가 짠거)
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = require('fs')
                .readFileSync('input.txt')
                .toString()
                .trim()
                .split('\r\n');

    const N = parseInt(input[0]); // 첫 번째 줄의 값을 N으로 파싱

    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(i)); // 별표 출력
    }

    process.exit();
});

// 비동기 권장 코드
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const input = data.trim().split('\n');
    const N = parseInt(input[0]);

    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(i));
    }
});