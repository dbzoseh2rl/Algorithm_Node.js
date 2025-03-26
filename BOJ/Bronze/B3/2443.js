// const fs = require("fs"); // fs 모듈 추가
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n');

let n = parseInt(input[0]);

for(let i = 0; i < n; i++){
    console.log(" ".repeat(i) + "*".repeat(2*n - 2*i -1));
}