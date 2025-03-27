// const fs = require("fs"); // fs 모듈 추가
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n')

let n = parseInt(input[0]);

for(let i = 1; i <= n; i++){
    let spaces = ' '.repeat(n-i);
    let stars = '*'.repeat(i);
    console.log(spaces+stars);
}

