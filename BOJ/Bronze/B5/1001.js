const fs = require("fs");

let input = require('fs').readFileSync('input.txt').toString().split('\n');
// input.txt 기준이 B4안에서 input.txt를 찾음 그래서 오류 계속 떳음;
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A - B);