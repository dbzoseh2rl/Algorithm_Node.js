const fs = require('fs');

// 입력 파일을 읽어옵니다.
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n');

const N = parseInt(input[0]); // 첫 번째 줄에서 N을 읽어옵니다.

for (let i = 1; i <= N; i++) {
    console.log(i); // 1부터 N까지의 숫자를 출력합니다.
}