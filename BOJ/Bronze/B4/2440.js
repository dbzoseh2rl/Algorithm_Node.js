// const fs = require("fs"); // fs 모듈 추가
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\r\n')

let n = parseInt(input[0]);

for(let i = n; i > 0; i--){
    let stars = '*'.repeat(i);
    console.log(stars);
}